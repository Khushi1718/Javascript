function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(2)(4)(4));

function email_detalits(from){
    return function(to){
        return function(body){
            console.log(`sending email to ${to} send by ${from} and the email is ${body}`);
        
        }
    }
}
email_detalits("khushi nain")("sushil kumar")("hello ji")

// step1=email_detalits("khushinain78@gmail.com");
// step2=step1("khushinain17")
// step2("heeyyyyyyyy")
