// // Iterators (
// iterators and generators bringt the concept of iteration directly into the core lang and provide
// a mechanism for customising the behaviour of for ..(loops))

for (const val of [1,2,3,4]){
    console.log(val);
}
// genreally we give i=0;i<length.  but here it is inbuild 

//lets make an itterator function from scrach
function makeIterator(start=0,end=Infinity,step=1){
    let nextStart= start;
    let itterationCount=0;

    return{
        next(){
            let result;
            if(itterationCount<end){
                result={value:nextStart,done:false}
                nextStart=nextStart+step;
                itterationCount++ ;
                return result
            }
            return{ value: itterationCount,done :true}
        }
    }
}

const myIterator=makeIterator(1,10,1);
let result=myIterator.next()

while(!result.done){
    console.log(result.value);
    result=myIterator.next();
}

function* yield_fn(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
}
// console.log(yield_fn());

// const even=yield_fn();

// for(const v of even){
//     console.log(v);
// }

function* makeMyIterator(start,end){
    for(let i=start;i<=end;i++){
        yield i;
    }
}

const one=makeMyIterator(1,10);
for (const val of one){
    console.log(val);
}
