const data = [
    {
      "title": "Work",
      "timeframes": {
        "day": {
          "current": 5,
          "previous": 7
        },
        "week": {
          "current": 32,
          "previous": 36
        },
        "month": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "day": {
          "current": 1,
          "previous": 2
        },
        "week": {
          "current": 10,
          "previous": 8
        },
        "month": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "day": {
          "current": 0,
          "previous": 1
        },
        "week": {
          "current": 4,
          "previous": 7
        },
        "month": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "day": {
          "current": 1,
          "previous": 1
        },
        "week": {
          "current": 4,
          "previous": 5
        },
        "month": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "day": {
          "current": 1,
          "previous": 3
        },
        "week": {
          "current": 5,
          "previous": 10
        },
        "month": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "day": {
          "current": 0,
          "previous": 1
        },
        "week": {
          "current": 2,
          "previous": 2
        },
        "month": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

let hours = document.querySelectorAll('.hours');
let before = document.querySelectorAll('.before');

function cambiarEstado(timeframe) {

  for(let i = 0; i < hours.length; i++) {

    hours[i].innerHTML = `${data[i]['timeframes'][timeframe]['current']}hrs`;
    before[i].innerHTML = `Last ${timeframe} - ${data[i]['timeframes'][timeframe]['previous']}hrs`;
    
  }

}