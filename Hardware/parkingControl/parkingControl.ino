/**
 * Code to control the parking car.
 * Made by Jairo Ortega Calderón.
 * Made on 22/09/2019
 * Based on code presented on: https://learn.adafruit.com/mqtt-adafruit-io-and-you/intro-to-adafruit-mqtt
 */

//Libraries needed
#include <ESP8266WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

#include <Servo.h>

//Constants for connection
#define AIO_SERVER      "soldier.cloudmqtt.com"
#define AIO_SERVERPORT  13326
#define AIO_USERNAME    "nuhrcjbq"
#define AIO_KEY         "z-bdeH-L8ciW"

const char ssid[] = "Apartamento 2";     //Network SSID
const char pass[] = "91PLpECm";    //Network password

int status = WL_IDLE_STATUS;

//Client needed for connection
WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);

//Subscribed topic (object)
Adafruit_MQTT_Subscribe subGate = Adafruit_MQTT_Subscribe(&mqtt, "bar/parqueo/admin/");

//variables needed for the servos and IR sensors
Servo servoSpot1;
Servo servoSpot2;
int spot1 = 13;
int spot2 = 15;
int isFreeSpot1 = HIGH;  //HIGH: No object, light off
int isFreeSpot2 = HIGH;


/**
 * Setup function
 * Define parameters
 */
void setup() {
  /*Serial.begin(9600);
  Serial.println("Ready");*/
  //Assign pins for servos
  servoSpot1.attach(12);
  servoSpot2.attach(14);
  //Type (IN/out) of IR sensor 
  pinMode(spot1, INPUT);
  pinMode(spot2, INPUT);

  //Initialize serial console
  while (!Serial);
  Serial.begin(115200);

  Serial.println(F("Init the WiFi module..."));

  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi not ready");
    while (true);
  }
  Serial.println("OK!");

  //Subscribe topic
  mqtt.subscribe(&subGate);

}

/**
 * Method to set free a spot
 */
void closeSpot(char spot){
  if(spot == '1'){
    servoSpot1.write(0); // Desplazar a 0º
    isFreeSpot1 = LOW;
    Serial.println("CERRE PUERTA 1");
  }
  else{
    servoSpot2.write(0); // Desplazar a 0º
    isFreeSpot1 = LOW;
    Serial.println("CERRE PUERTA 2");
  }
  sensorClosed(spot);
}

/**
 * Method to use a spot
 */
void openSpot(char spot){
  if(spot == '1'){
    servoSpot1.write(0); // Desplazar a 0º
    isFreeSpot1 = HIGH;
    Serial.println("ABRI PUERTA 1");
  }
  else{
    servoSpot2.write(0); // Desplazar a 0º
    isFreeSpot2 = HIGH;
    Serial.println("ABRI PUERTA 2");
  }
  sensorOpen(spot);
}

/**
 * Auxiliar method to control the leave operation.
 * Uses the IR sensors and close the gates in the end.
 */
void sensorClosed(char spot){
  if(spot == '1'){
    while(isFreeSpot1 != HIGH){
      delay(1000); //1 sec
      isFreeSpot1 = digitalRead(spot1); 
    }    
    delay(5000);  //5 secs
    servoSpot1.write(90);
  }
  else{
    while(isFreeSpot2 != HIGH){
      delay(1000);
      isFreeSpot2 = digitalRead(spot2); 
    }
    delay(5000);
    servoSpot2.write(90);    
  }  
}

/**
 * Auxiliar method to control the use of the spot.
 * Uses the IR sensors and close the gates in the end.
 */
void sensorOpen(char spot){
  if(spot=='1'){
    while(isFreeSpot1 != LOW){
      delay(1000);
      isFreeSpot1 = digitalRead(spot1); 
    }
    delay(5000);
    servoSpot1.write(90);
  }
  else{
    while(isFreeSpot2 != LOW){
      delay(1000);
      isFreeSpot2 = digitalRead(spot2); 
    }
    delay(5000);
    servoSpot2.write(90);
  }
}

/**
 * Loop Method
 * Executes the program.
 */
void loop() {
  //Listen the topic, admin the spots
  MQTT_connect();
  Adafruit_MQTT_Subscribe *subscription;
  while ((subscription = mqtt.readSubscription(5000))) {
    if (subscription == &subGate) {
      char * msg = (char *)subGate.lastread;
      if(*(msg+3) == '0'){
        openSpot(*(msg+2));
      }
      else if (*(msg+3) == '1'){
        closeSpot(*(msg+2));        
      }
      else
        Serial.println("ERROR: No valid code for gates.");
    }
  }
}

/**
 * Method to Connect with the mqtt broker.
 */
void MQTT_connect() {
  int8_t ret;

  //Attempt to connect to Wifi network
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);

    //Wait 10 seconds for connection:
    uint8_t timeout = 10;
    while (timeout && (WiFi.status() != WL_CONNECTED)) {
      timeout--;
      delay(1000);
    }
  }

  //Stop if already connected.
  if (mqtt.connected()) {
    return;
  }

  Serial.print("Connecting to MQTT... ");

  while ((ret = mqtt.connect()) != 0) {
    Serial.println(mqtt.connectErrorString(ret));
    Serial.println("Retrying MQTT connection in 5 seconds...");
    mqtt.disconnect();
    delay(5000);
  }
  Serial.println("MQTT Connected!");
}
