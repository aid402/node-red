[
    {
        "id": "b6655547.9c10c8",
        "type": "inject",
        "z": "366d6ff4.30425",
        "name": "",
        "topic": "",
        "payload": ":123456788\\r\\n",
        "payloadType": "str",
        "repeat": "4",
        "crontab": "",
        "once": true,
        "x": 120,
        "y": 100,
        "wires": [
            [
                "fd8cf8ae.b903c8",
                "5b35d09d.51a6b"
            ]
        ]
    },
    {
        "id": "232d0bbc.5f1d34",
        "type": "ui_text",
        "z": "366d6ff4.30425",
        "group": "9dea7576.735168",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "last topic",
        "format": "{{msg.topic}}",
        "layout": "row-spread",
        "x": 520,
        "y": 180,
        "wires": []
    },
    {
        "id": "fd8cf8ae.b903c8",
        "type": "debug",
        "z": "366d6ff4.30425",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 290,
        "y": 40,
        "wires": []
    },
    {
        "id": "8da4542b.77f0f8",
        "type": "debug",
        "z": "366d6ff4.30425",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "topic",
        "x": 480,
        "y": 100,
        "wires": []
    },
    {
        "id": "5b35d09d.51a6b",
        "type": "switch",
        "z": "366d6ff4.30425",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "123456789",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 150,
        "y": 160,
        "wires": [
            [
                "25a31663.275afa"
            ],
            [
                "38bf5be9.7b2494"
            ]
        ]
    },
    {
        "id": "25a31663.275afa",
        "type": "change",
        "z": "366d6ff4.30425",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "output1",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 160,
        "wires": [
            [
                "8da4542b.77f0f8",
                "232d0bbc.5f1d34",
                "7a58aeed.66b9c"
            ]
        ]
    },
    {
        "id": "7a58aeed.66b9c",
        "type": "function",
        "z": "366d6ff4.30425",
        "name": "count",
        "func": "var count = global.get('count')||0;\nswitch (msg.topic) {\n    case \"output1\":\n        count += 5;\n        break;\n    case \"output2\":\n        count += 3;\n        break;\n}\nglobal.set('count',count);\nmsg.count = count;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 320,
        "wires": [
            [
                "d40c14fd.69df88",
                "8830a315.6f01c"
            ]
        ]
    },
    {
        "id": "38bf5be9.7b2494",
        "type": "change",
        "z": "366d6ff4.30425",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "output2",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 200,
        "wires": [
            [
                "232d0bbc.5f1d34",
                "8da4542b.77f0f8",
                "7a58aeed.66b9c"
            ]
        ]
    },
    {
        "id": "d40c14fd.69df88",
        "type": "ui_text",
        "z": "366d6ff4.30425",
        "group": "9dea7576.735168",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "count",
        "format": "{{msg.count}}",
        "layout": "row-spread",
        "x": 510,
        "y": 320,
        "wires": []
    },
    {
        "id": "8830a315.6f01c",
        "type": "debug",
        "z": "366d6ff4.30425",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "count",
        "x": 470,
        "y": 400,
        "wires": []
    },
    {
        "id": "9dea7576.735168",
        "type": "ui_group",
        "z": "",
        "name": "Default",
        "tab": "c3c47543.9df008",
        "disp": true,
        "width": "6"
    },
    {
        "id": "c3c47543.9df008",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard"
    }
]
