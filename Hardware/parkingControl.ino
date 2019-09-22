#include <ESP8266WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

#include <Servo.h>


Servo servoSpot1;
Servo servoSpot2;

int spot1 = 13;
int spot2 = 15;
int isFreeSpot1 = HIGH;  // HIGH MEANS
int isFreeSpot2 = HIGH;

void setup() {
  // Iniciamos el monitor serie para mostrar el resultado
  Serial.begin(9600);
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoSpot1.attach(12);
  servoSpot2.attach(14);
  pinMode(spot1, INPUT);
  pinMode(spot2, INPUT);

}

void closeSpot(int spot){
  if(spot==1){
    servoSpot1.write(90); // Desplazar a 0º
  }
  else{
    servoSpot2.write(90); // Desplazar a 0º
  }
  delay(1000);  // 1 segundo
}

void openSpot(int spot){
  if(spot==1){
    servoSpot1.write(0); // Desplazar a 0º
  }
  else{
    servoSpot2.write(0); // Desplazar a 0º
  }
  delay(1000);  // 1 segundo
}

void loop() {
  isFreeSpot1 = digitalRead(spot1);
  isFreeSpot2 = digitalRead(spot2);
  if (isFreeSpot1 == LOW){
    closeSpot(1); 
  }
  if(isFreeSpot1 == HIGH){
    openSpot(1);
  }
  if (isFreeSpot2 == LOW){
    closeSpot(2); 
  }
  if(isFreeSpot2 == HIGH){
    openSpot(2); 
  }

}
