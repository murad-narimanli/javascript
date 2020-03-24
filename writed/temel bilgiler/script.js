
        // literal yazilis es6
        const name = "Mustafa Murat Coşkun";
        const department = "Bilişim";
        const salary = 4000;
        const a = `isim:${name}\nDepartman:${department}\nmaas:${salary}`;

        const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;
        const a = "ad: " + name + "\n" + "dapart: " +  department  + "\n" + "maas " + salary;
        const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;
        const html = "<ul>"+
                     "<li>" + name + "</li>" +
                     "<li>" + department + "</li>" +
                     "<li>" + salary + "</li>" +
                 "</ul>";
        console.log(a);
        function a() {
             return "salam"; 
         } 
        const html = `
         <ul>
             <li>${name}</li>
             <li>${department}</li>
             <li>${salary}</li>
             <li>${10 / 4}</li>
             <li>${a()}</li>
         </ul>
        `;
         document.body.innerHTML = html



        // arraylar

        let value;
        const numbers = [0,2,4,5,67,2,123,4,134,134,14,234];
        const langs = [ "css" , "nodejs" , "vuejs"];
        const a =  [4,6,423 ,null , undefined, "salam" ,53,5 , 42 , 5,2 ];

        // uzunlugu
        value = numbers.length;
        // 6 ci yerdekinin qiymetini tapmaq
        value = numbers[6];
        // indexin deyerin deyishmek
        numbers[2] = 1000
        // indexi tapmaq
        value = numbers.indexOf(1000);
        // arrayin sonuna elave etme
        numbers.push(2000)
        // arrayin evvelne elave etme
        numbers.unshift(1003)
        // arrayin sonundan silme
        numbers.pop()
        // arrayin evvelinden silme
        numbers.shift()
        // 0 dan 3 e cen silir
        numbers.splice(0,3)
        // tersine duzur
        numbers.reverse()
        // ilk reqemine gore duzur
        numbers.sort()

        // sorta funksiya yazmaq
        numbers.sort(function (x,y) {
            return x-y;
            // kicikden boyuye dogru siralama
        })

            numbers.sort(function (x,y) {
            return y-x;
            //  boyuyden kiciye dogru siralama
        })
        console.log(numbers);
        console.log(value);

        


         // swich case 
        
            
            const process = 5;

            switch (process) {
                case 1:
                    console.log("1 ci ");
                    // break; yoxlamaq ucundu
                    break;
                case 2 :
                        console.log("2 ci");
                        break;
                default:
                    console.log("hecne");
                    // statements_def
                    break;
            }


    



         // funksiyalar  

                function salam(name = "no bilgi",age ="NONE") {
                     // defalt qiymeti yoxlamaq ifin ici ... 
                    if (typeof name , age  === "undefined") {
                        name = "bilgi yox";
                        age = "bilgi yox";
                    }
                    console.log(`ad: ${name} yas: ${age} `);
                }
                salam("Murad",12);
                salam("murad");
        


      




         //     return 
        // eger 2 funksiya varsa  ve o iki funksiyadan deyerleri alb istifade edecikyikse onda return istifade olunur 

       //  meselen square de ki qiymeti cube de istifade etmek ucun return tetbiq olunur

       //  returnden sonra hec bir funksiya iwlemez cunki evvelceden return isledilmish olr


       //  funksiyani sonlandirmaq ucundur


            
                // return
            function squrae(x) {
               
                return x * x;
            }

            function cube(x) {
                return x*x*x ;
              }

            let a = squrae(12);

            a = cube(a);

            console.log(a);


            // *************************

            // normal function
            function merhaba () {
                return "salam";
            }

            console.log(merhaba());

            // function expression

        const merhabaa = function (name) {
            console.log("salamlarrr" +" " + name);
        }

        merhabaa("murad");
            // ***************

    

        // IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION 

        // TURKCESI  -  YAZILIDI YERDE ISHLEYEN FUNKSIYALAR;

        // D I Q Q E T L E  B A X

        (function (name) {
            console.log("salamlarrr" +" " + name);
        })("murad")


        // ***********************

        const database = {
            host: "localhost",
            add: function () {
                /* body... */
                console.log("eklendi");
            },
            get: function  () {
                // body... 
                console.log("ede edildi");
            },

            update:function (id) {
                /* body... */
                console.log(`id ${id} guncellendi`);
            },

            delete: function (id) {ff
                console.log(`id ${id} silindi`);
            }
        }

        console.log(database.host);

        database.add();
        database.delete(2);




         // dovrler 
         // FOR WHILE DO  


            while
            let i = 0 ;
            while (i <= 10) {
                // statement
                console.log(i);
                i++
            }



            // break ve continue 



            // break burada i = 5 olanacan ishleyir  i5 olanda salayr
            let i = 0 ;

            while (i < 10) {
                // statement
                console.log(i);

                if (i == 5) {
                    break;
                }

                i++;
            }


            // continue

            // continue; -nun esas mesqsedi dovrun evvelne getmekdi ashagilari oxumadan birbasha evvele getmek ucun istifade olunur


            let i = 0;

            while (i <10) {
                if (i==3 || i == 5) {
                    i ++;
                    continue;
                }
                console.log(i);
                i++;
            }





            // do while dovru

            let i = 0;


            do{
                console.log(i);
                i++;
            }while (i <= 99);





            // for dovru

            // butun dilleri yazdirmagcun 
            // index deyisheni yaradib onu arrayin uzunlugna beraber olanacan getrb sora hemin qiymeti arrayn indexine beraber etmek olar 

            const langs  =  ["java" , "javasscript" , "phyton"];


                // for 

            for(let index = 0 ; index < langs.length ;  index++){
                console.log(langs[index]);
            }


            // foreach
            // for-un qisa formasi

            langs.forEach( function(lang, index) {
                console.log(lang , index);
            });



            // map funksiasi melumatlardan  array yaratmaqcundur 

            const users = [
                {
                name:"murad",
                age : 21
                },
                {
                name:"elovset",
                age :22
                }
            ]

            const names = users.map(function(user) {
               return user.name;
            });

            console.log(names);


            key in  dongusu //////

            const user = {
                name : "murad",
                age: 21
            }

            for( let key in user ){
                console.log(key , user[key]);
            }






         // window  obyekti 

    
              // Alert
            alert("Merhaba");

            // confirmation yeni testiqleme bu alert kimi sual verir sorada cavabn alr ok ve ya cancel ile
            const cevap = confirm("Emin misiniz?")
            console.log(cevap);

            if (cevap){
                console.log("Silin Gitsin");
            }
            else {
                console.log("Silmeyin");
            }

            // prompt input verir daxil edirsen */
            const cevap = prompt("2 + 2 = ?");

            if (cevap == "4") {
                console.log("Doğru");
            }
            else {
                console.log("Yanlış");10
            }



            // windowun diger funksialari
            let value;

            value = window;
            // umumi location
            value = window.location;
            // hosting (domen adi sehife ile birlikde)
            value = window.location.host;
            // domen hosting adi
            value = window.location.hostname;
            // port adi meselen 5500
            value = window.location.port;
            // sehifenin linki
            value = window.location.href;


            // reload ama tek ishlenmir sonsuz reload verir
            if (confirm("Sayfa yenilensin mi?")) {
                window.location.reload();
            }
            else {
                console.log("sayfa yenilenmedi");
            }

            // kanerlar ve yuxarda tabarla hundurluk ve en verir
            value = window.outerHeight;
            value = window.outerWidth;

            // tekce sehifenin enini ve uzunlugunu verir
            value = window.innerHeight;
            value = window.innerWidth;

            // x oxu uzre scrollun mesafesini verir
            value = window.scrollX;
            // y oxu uzre mesafeni verir
            value = window.scrollY;

            console.log(value);
    


        //  scope anlayisi 
        //  global 
        // function
        // block scopeleri var 
     
            // Scope Kavramı
            let a = "123456";

            // global scope  butun file a aiddir heryerde ishleyir 
            // var dan istifade etmek artiq elverishsizdir cunki  var block scope de eyni adla cagrlanda deyishir
            var value1 = 10;
            let value2 = 20;
            const value3 = 30;


            // function scope  bu scopede icinde olan deyishkenler hamsi normal sheklde ishleyir coldeki ile toqqushmur
            function Func(){
                var value1 = 40;
                let value2 = 50;
                const value3 = 60;

                console.log(value1,value2,value3);
            }
            Func();

            // bu block scopedir cunki burada istifade olunan deyishkeler if while ve s icerisinde istifade olunur deyishkenler colde cagrila bilmir var cagrilir ama eyni adli olanda problem yaradir 
            if (true){

                var value1 = 40;
                let value2 = 50;
                const value3 = 60;
                console.log(value1,value2,value3);

            }

            console.log(value1,value2,value3);


            if (true) {

                let a = "34343434";

            }
         console.log(value1,value2,value3);

      