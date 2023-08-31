
const argv = process.argv

const digitWords = {
            "00": "zero",
            "01": "one",
            "02": "two",
            "03": "three",
            "04": "four",
            "05": "five",
            "06": "six",
            "07": "seven",
            "08": "eight",
            "09": "nine",
            "10": "ten",
            "11": "eleven",
            "12": "twelve",
            "13": "thirteen",
            "14": "fourteen",
            "15": "fifteen",
            "16": "sixteen",
            "17": "seventeen",
            "18": "eighteen",
            "19": "nineteen",
            "20": "twenty",
            "21": "twenty one",
            "22": "twenty two",
            "23": "twenty three",
            "24": "twenty four",
            "25": "twenty five",
            "26": "twenty six",
            "27": "twenty seven",
            "28": "twenty eight",
            "29": "twenty nine",
            "30": "thirty",
            "31": "thirty one",
            "32": "thirty two",
            "33": "thirty three",
            "34": "thirty four",
            "35": "thirty five",
            "36": "thirty six",
            "37": "thirty seven",
            "38": "thirty eight",
            "39": "thirty nine",
            "40": "fourty",
            "41": "fourty one",
            "42": "fourty two",
            "43": "fourty three",
            "44": "fourty four",
            "45": "fourty five",
            "46": "fourty six",
            "47": "fourty seven",
            "48": "fourty eight",
            "49": "fourty nine",
            "50": "fifty",
            "51": "fifty one",
            "52": "fifty two",
            "53": "fifty three",
            "54" : "fifty four",
            "55": "fifty five",
            "56": "fifty six",
            "57": "fifty seven",
            "58": "fifty eight",
            "59": "fifty nine"

}




function timeWord(timeString)
{
    // First slice String into hours and minutes data
    const hourString = timeString.slice(0,2)
    const minuteString = timeString.slice(3,5)
    console.log(`Time : ${timeString}, Hours: ${hourString}, Minutes: ${minuteString}`)
    //*************** */


    // First test for "noon" or "midnight"
    if(timeString == "00:00"){
        return "midnight"
    }
    if(timeString == "12:00"){
        return "noon"
    }
    else {

        // if not noon or midnight, the first part of the returning string has to be the number of hours as word
        let timewords = ""
        const hourLib = {
            "00": "zero",
            "01": "one",
            "02": "two",
            "03": "three",
            "04": "four",
            "05": "five",
            "06": "six",
            "07": "seven",
            "08": "eight",
            "09": "nine",
            "10": "ten",
            "11": "eleven",
            "12": "twelve",
            "13": "one",
            "14": "two",
            "15": "three",
            "16": "four",
            "17": "five",
            "18": "six",
            "19": "seven",
            "20": "eight",
            "21": "nine",
            "22": "ten",
            "23": "eleven",
            "24": "twelve"
            

        }
        
        timewords += hourLib[hourString]

        if (minuteString=="00"){
            timewords += " o clock"
            if (Number(hourString) > 12 ){
                timewords += " pm"
            }
            else {
                timewords += " am"
            }
        }
        if (minuteString[0]== "0"){
            timewords += " o"
            timewords += ` ${hourLib[minuteString]}`
        }
        else {timewords += ` ${digitWords[minuteString]}`}
        return timewords


       
    }




}


console.log(timeWord(argv[2]))