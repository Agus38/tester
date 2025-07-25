const fs = require('fs')

global.owner = "6281931658034" //owner number
global.footer = "CRASHER FORCRASHER" //footer section
global.namabot = "CRASHER FORCRASHER" //nama bot
global.status = true //"self/public" section of the bot
global.namaowner = "CRASHER FORCRASHER"
global.idsaluran = "-"
global.imgmenu = "https://img1.pixhost.to/images/6999/618883071_imgtmp.jpg"

//======[ Setting Event ]======//
global.dana = `-`
global.gopay = `-`
global.ovo = "-"
global.shope = "-"
global.bank = "-"
global.qris = fs.readFileSync("./media/qris.jpg")
global.namastore = "`CRASHER FORCRASHER`"
global.lol = "";
global.msg = {
    owner: "You Are Not Owner",
    premium: "You Are Not Premium Member",
    admin: "You Are Not Admin",
    adminbot: "Me Not Admin",
    priv: "khusus pribadi",
    bot: "khusus nomer bot"
}
global.autoTyping = false // ubah jadi true untuk menyalakan auto typing

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
