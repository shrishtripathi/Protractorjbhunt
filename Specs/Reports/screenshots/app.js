var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f500df-00de-007d-004f-00d500920059.png",
        "timestamp": 1542082351950,
        "duration": 2329
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001b0078-0087-0057-004a-00870071000d.png",
        "timestamp": 1542082354587,
        "duration": 457
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b500f7-0024-00d1-008e-002000650027.png",
        "timestamp": 1542082355330,
        "duration": 93
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fc00d4-00a8-00e1-00e8-00c100140013.png",
        "timestamp": 1542082355706,
        "duration": 143
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007400f8-00d9-00a8-00f8-00f2009e0049.png",
        "timestamp": 1542082356199,
        "duration": 109
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00950045-00cc-002f-000c-005f0063009e.png",
        "timestamp": 1542082356603,
        "duration": 109
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00be0025-0012-0005-0082-003000e8008a.png",
        "timestamp": 1542082356989,
        "duration": 127
    },
    {
        "description": "Click on Open Customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0080001b-0018-003b-000a-000100880046.png",
        "timestamp": 1542082357436,
        "duration": 96
    },
    {
        "description": "Click and select customer dropdown|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c900df-00d9-00ad-0070-0066005e0017.png",
        "timestamp": 1542082357830,
        "duration": 125
    },
    {
        "description": "select currency |Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001e00e3-000e-00c3-003f-00dd00d90077.png",
        "timestamp": 1542082358218,
        "duration": 153
    },
    {
        "description": "click on Process button to generate account no|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 25104,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00900064-0053-00ba-0023-00e1003a00fb.png",
        "timestamp": 1542082358650,
        "duration": 97
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};