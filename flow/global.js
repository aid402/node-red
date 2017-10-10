[
    {
        "id": "120979e7.f8e536",
        "type": "function",
        "z": "361199c9.b6aa36",
        "name": "distance",
        "func": "context.global.distance = msg.payload;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 260,
        "y": 180,
        "wires": [
            [
                "b92404c0.e2f128"
            ]
        ]
    },
    {
        "id": "ca34c858.a53848",
        "type": "function",
        "z": "361199c9.b6aa36",
        "name": "rpm",
        "func": "context.global.rpm = msg.payload;",
        "outputs": 1,
        "noerr": 0,
        "x": 250,
        "y": 280,
        "wires": [
            [
                "b92404c0.e2f128"
            ]
        ]
    },
    {
        "id": "b92404c0.e2f128",
        "type": "function",
        "z": "361199c9.b6aa36",
        "name": "time",
        "func": "if (context.global.rpm > 0) {\nmsg.payload = context.global.distance/context.global.rpm;\nreturn msg; \n}",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 220,
        "wires": [
            [
                "3ddea07c.4d8b3"
            ]
        ]
    },
    {
        "id": "3ddea07c.4d8b3",
        "type": "debug",
        "z": "361199c9.b6aa36",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 490,
        "y": 300,
        "wires": []
    },
    {
        "id": "b9563e2e.3ae48",
        "type": "inject",
        "z": "361199c9.b6aa36",
        "name": "",
        "topic": "",
        "payload": "150",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 140,
        "wires": [
            [
                "120979e7.f8e536"
            ]
        ]
    },
    {
        "id": "1c9c0391.82193c",
        "type": "inject",
        "z": "361199c9.b6aa36",
        "name": "",
        "topic": "",
        "payload": "20",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 240,
        "wires": [
            [
                "ca34c858.a53848"
            ]
        ]
    }
]
