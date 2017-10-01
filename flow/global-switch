[
    {
        "id": "4c3ee68d.2f76d8",
        "type": "switch",
        "z": "6a9bac31.9d6444",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "2",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 350,
        "y": 340,
        "wires": [
            [
                "19c0a4a9.8f205b"
            ],
            [
                "bf87cbca.2d56c8"
            ]
        ]
    },
    {
        "id": "bf87cbca.2d56c8",
        "type": "change",
        "z": "6a9bac31.9d6444",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "man",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 440,
        "wires": [
            [
                "a364fac6.857b28"
            ]
        ]
    },
    {
        "id": "19c0a4a9.8f205b",
        "type": "change",
        "z": "6a9bac31.9d6444",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "man",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 400,
        "wires": [
            [
                "a364fac6.857b28"
            ]
        ]
    },
    {
        "id": "507809ea.e85018",
        "type": "inject",
        "z": "6a9bac31.9d6444",
        "name": "",
        "topic": "2",
        "payload": "",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": true,
        "x": 170,
        "y": 360,
        "wires": [
            [
                "4c3ee68d.2f76d8"
            ]
        ]
    },
    {
        "id": "1ddadba8.77ecd4",
        "type": "inject",
        "z": "6a9bac31.9d6444",
        "name": "",
        "topic": "MAN",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "x": 170,
        "y": 300,
        "wires": [
            [
                "4c3ee68d.2f76d8"
            ]
        ]
    },
    {
        "id": "a364fac6.857b28",
        "type": "switch",
        "z": "6a9bac31.9d6444",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "1",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 490,
        "y": 500,
        "wires": [
            [
                "9a51284f.c60428"
            ],
            [
                "72b488b2.357488"
            ]
        ]
    },
    {
        "id": "988494c.57d1668",
        "type": "file in",
        "z": "6a9bac31.9d6444",
        "name": "",
        "filename": "",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 670,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "9a51284f.c60428",
        "type": "change",
        "z": "6a9bac31.9d6444",
        "name": "led-on",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "/home/pi/led-on.png",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 530,
        "y": 560,
        "wires": [
            [
                "988494c.57d1668"
            ]
        ]
    },
    {
        "id": "72b488b2.357488",
        "type": "change",
        "z": "6a9bac31.9d6444",
        "name": "led-off",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "/home/pi/led-off.png",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 530,
        "y": 600,
        "wires": [
            [
                "988494c.57d1668"
            ]
        ]
    }
]
