import thechikanstore from "../assets/images/thechikanstore.png";
import chikan1 from "../assets/images/Chikan1.png";
import chikan2 from "../assets/images/Chikan2.png";
import chikan3 from "../assets/images/Chikan3.png";

import Thebombaebar from "../assets/images/Thebombaebar.png";
import thebombae1 from "../assets/images/thebombae1.png";
import thebombae2 from "../assets/images/thebombae2.png";
import thebombae3 from "../assets/images/thebombae3.png";

export const websites = [

{
id:1,
slug:"chikan",

count:"01 / 04",

bg:"linear-gradient(135deg,#FDF3EA,#F8E7D6)",

title:"The Chikan Store",

industry:"Ethnic Fashion • D2C",

desc:"A premium ethnic fashion e-commerce website with a modern shopping experience and responsive design.",

main:thechikanstore,

gallery:[
chikan1,
chikan2,
chikan3
],

type:"D2C E-Commerce",

tech:"HTML • CSS • JavaScript"
},

{
id:2,
slug:"bombaebar",

count:"02 / 04",

bg:"linear-gradient(135deg,#F4F8FF,#E7EEFF)",

title:"The Bombae Bar",

industry:"Restaurant • Food & Beverage",

desc:"A modern restaurant website designed to showcase signature dishes and simplify online ordering.",

main:Thebombaebar,

gallery:[
thebombae1,
thebombae2,
thebombae3
],

type:"Restaurant Website",

tech:"HTML • CSS • JavaScript"
}

];
export default websites;