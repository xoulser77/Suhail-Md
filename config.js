const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="xoulser@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-kzyop/endpoint/data/v1"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BxR0LrCkAVKGHriVvo7sKy";
global.website=process.env.GURL || "https://chat.whatsapp.com/BxR0LrCkAVKGHriVvo7sKy" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ff20fe80e4765d14301c3.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐗ᴏᴜʟ 𝐌ᴅ" 


global.devs = "919633605648" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919633605648";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "919633605648";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "919633605648";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919633605648";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_08_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3A3OGtBSzhoSVg3aWtoZzMzTU5ZeThBbk92bFBwVlgzSzJxR09CS0dMMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU3pOYVNISjVTbjZ1dHZtbVhlbUQ2UVwiLFxuICBcInBob25lSWRcIjogXCI0YjYwZDI0YS03MmI5LTQzZTEtYmU5OC1jODY3MzFkYTdkZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMjIyLFxuICAgICAgNTMsXG4gICAgICAxMDQsXG4gICAgICAxNjEsXG4gICAgICAyMjQsXG4gICAgICAxODksXG4gICAgICAyMjUsXG4gICAgICAxNzUsXG4gICAgICAxMzksXG4gICAgICAyMzcsXG4gICAgICAyMTIsXG4gICAgICAyMDcsXG4gICAgICAxMDIsXG4gICAgICA0OSxcbiAgICAgIDI5LFxuICAgICAgMTQyLFxuICAgICAgMjEzLFxuICAgICAgMTc5LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgNTUsXG4gICAgICA3MCxcbiAgICAgIDIwMSxcbiAgICAgIDEzLFxuICAgICAgMTA0LFxuICAgICAgMjE5LFxuICAgICAgNDIsXG4gICAgICAxMjgsXG4gICAgICAxNDksXG4gICAgICA0OSxcbiAgICAgIDUsXG4gICAgICAyMjksXG4gICAgICAxNjUsXG4gICAgICAxNzEsXG4gICAgICA1OCxcbiAgICAgIDU2LFxuICAgICAgMTQwLFxuICAgICAgMTQxLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVENkQ1Wlg3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk2MzM2MDU2NDg6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk0MzYwNDMxNTQyNDAxOjY2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DeTI4Y0RFT1R4eExRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUFoZkRsaDVJK1p5R1k2bk42eHZCUnBuVzdkMTE0Y0pjYVZOckdzRndUWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPd2VRM2sxQTZPajlvcVNRVVdZMGFOem9HM2pubE52Ry9IZjVaWVBrczVtMi96eXY0cTdSUGRVN0cyNVUyTWQ4akpMY3UrOENxaXhwRVVSV2lRdGRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3YzJ3NzY4Z2IvMXV3OEQwbThiVEJxalZWTjNaeml5c2IvejBYV0NjZkJwQ1ZiSzZINWJneFgzNmlEMHJ3UlZoa2FmMFV2RUJxeG5rbW11bHpjUjNDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk2MzM2MDU2NDg6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3OTMzMjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPc3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9zeC5qc29uIjogIntcImtleURhdGFcIjpcIk9oelpXMW40Q2U4YnlVNmp2UTFrQ3RGQ2NreHRNUmJNRWEvTlA0bW1hazg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU1NzAxNjAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NTQyNTI1NjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```𝐗ᴏᴜʟ 𝐌ᴅ```"),
 
  author : process.env.PACK_AUTHER|| "🩵🖐🏻",
  packname: process.env.PACK_NAME || "𝐗ᴏᴜʟ 𝐒ᴇʀ",
  botname : process.env.BOT_NAME  || "𝐗ᴏᴜʟ 𝐌ᴅᴅ",
  ownername:process.env.OWNER_NAME|| "𝐗ᴏᴜʟ 𝐒ᴇʀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
