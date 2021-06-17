// 1. Feladat
// Ellenőrizd a telepített NodeJS verziószámát!

//      > node -v
//      v14.16.0

// 2. Feladat
// Ellenőrizd a telepített npm verziószámát!

//      > npm -v
//      6.14.11

// 3. Feladat
// Listázd ki a projekted függőségeit! Csak az első szint kell, a telepített csomagok függőségei nem!
// a nodejs-basics projektben futattva a listázást

//      > npm ls --prod --depth=0
//      nodejs-basics@1.0.0 C:\frontend\fullstack\nodejs-basics
//      +-- bluebird@3.7.2
//      `-- yargs@16.2.0

// 4. Feladat
// Írasd ki a konzolra az eslint csomag adatait!

//          > npm view eslint

//          eslint@7.28.0 | MIT | deps: 39 | versions: 277
//          ...


// 5. Feladat
// Kérdezd le az projekted elavult csomagjait, és ha van találat, frissítsd őket!

//      > npm outdated
//      Package                 Current   Wanted   Latest  Location     
//      @types/node             14.17.3  14.17.3  15.12.2  nodejs-basics
//      eslint                   7.25.0   7.28.0   7.28.0  nodejs-basics
//      eslint-config-standard   16.0.2   16.0.3   16.0.3  nodejs-basics
//      eslint-plugin-import     2.22.1   2.23.4   2.23.4  nodejs-basics
//      eslint-plugin-promise     4.3.1    4.3.1    5.1.0  nodejs-basics
//      jest                     26.6.3   26.6.3   27.0.4  nodejs-basics
//      typescript                4.2.4    4.3.3    4.3.3  nodejs-basics
//      yargs                    16.2.0   16.2.0   17.0.1  nodejs-basics


//      > npm update
//      npm WARN nodejs-basics@1.0.0 No repository field.
//      ...
