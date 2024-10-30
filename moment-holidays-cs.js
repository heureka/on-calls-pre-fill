/******

Czech holidays plugin for Moment.js -- Rozšíření o české svátky pro Moment.js

https://github.com/bambusekd/moment-holidays-cs

USAGE/POUŽITÍ:

<moment_object>.holiday() will return holiday name in case the day is a holiday, otherwise undefined will be returned
<moment_object>.isHoliday() will return true in case the day is a holiday, otherwise false will be returned

<moment_object>.holiday() vrátí jméno svátku v případě, že den je svátkem, jinak vrátí undefined
<moment_object>.isHoliday() vrátí true v případě, že den je svátkem, jinak vrátí undefined 

*****/

(function() {
    var moment;

    moment = typeof require !== "undefined" && require !== null ? require("moment") : this.moment;

    var _holidays = {
        '01/01': "Den obnovy samostatného českého státu",
        '01/05': "Svátek práce",
        '08/05': "Den vítězství",
        '05/07': "Den slovanských věrozvěstů Cyrila a Metoděje",
        '06/07': "Den upálení mistra Jana Husa",
        '28/09': "Den české státnosti",
        '28/10': "Den vzniku samostatného československého státu",
        '17/11': "Den boje za svobodu a demokracii",
        '24/12': "Štědrý den",
        '25/12': "1. svátek vánoční",
        '26/12': "2. svátek vánoční"
    };

    moment.fn.get_easter_sunday = function(year){
        year = typeof year !== 'undefined' ? year : moment().year();
        var a = year % 19;
        var b = year % 4;
        var c = year % 7;
        var m = 24;
        var n = 5;
        var d = (19*a + m) % 30;
        var e = (n + 2*b + 4*c + 6*d) % 7;
        var u = d + e - 9;

        var day, month;

        if(u==25 && d==28 && e==6 && a>10){
            day = 18;
            month = 4;
        } else if(u>=1 && u <=25){
            day = u;
            month = 4;
        } else if(u>25){
            day = u - 7;
            month = 4;
        } else{
            day = 22+d+e;
            month = 3;
        } 

        return moment().year(year).month(month-1).date(day);
    };

    moment.fn.get_easter_monday = function(year){
        year = typeof year !== 'undefined' ? year : moment().year() ;
        return moment().get_easter_sunday(year).add(1,'d');
    };

    moment.fn.get_easter_friday = function(year){
        year = typeof year !== 'undefined' ? year : moment().year();
        return moment().get_easter_sunday(year).subtract(2,'d');
    };

    moment.fn.holiday = function() {
        var easter_monday = moment().get_easter_monday(this.year());
        var easter_friday = moment().get_easter_friday(this.year());

        if(this.isSame(easter_monday,'day')){
            return "Velikonoční pondělí";
        } else if(this.isSame(easter_friday,'day')){
            return "Velký pátek";
        } else{
            return (_holidays[this.format('DD/MM')] );
        }
    };

    moment.fn.isHoliday = function() {
        if(this.holiday()){
            return true;
        } else {
            return false;
        }
    };

    if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
        module.exports = moment;
    }

}(this));