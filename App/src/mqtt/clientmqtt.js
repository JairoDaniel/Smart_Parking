import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';

export default function MQTTClient() {
    init({
        size: 10000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        reconnect: true,
        sync : {}
    });
    
    function onConnect() {
        console.log("onConnect");

        const topic = "bar/parqueo/sensor"
        client.subscribe(topic);
    }
    
    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
        }
    }
  
    function onMessageArrived(message) {
        console.log("onMessageArrived:" + message.payloadString);
    }

    function doFail(e){
        console.log('error', e);
    }

    function sendData(msgToSend) {
        console.log("Send mqtt msg");

        const topic = "bar/parqueo/admin";
        message = new Paho.MQTT.Message(msgToSend);
        message.destinationName = topic;
        client.send(message);
    }
  
  
    const client = new Paho.MQTT.Client("soldier.cloudmqtt.com",  33326, "Myclientid_" + parseInt(Math.random() * 100, 10));
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.sendData = sendData;

    const options = {
        useSSL: true,
        userName: "nuhrcjbq",
        password: "z-bdeH-L8ciW",
        onSuccess: onConnect,
        onFailure: doFail
    };

    client.connect(options);


  
    return client;
}