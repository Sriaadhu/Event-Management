// const eventDB = require('../config/db');
// const eventsTbl = require("../models/events.model") (eventDB);
// const enrollTbl = require("../models/enrolls.model") (eventDB);


// exports.report = async(req,res) =>
//     {
//         try{
//             const getEvents = await eventsTbl.findAll({where:{status:1}})
//             console.log("getEvents length", getEvents.length);


//             let data =[];


//             for(let i=0; i<getEvents.length; i++)
//             {
//                 let value = {
//                     eventId : getEvents[i].id,
//                     eventname : getEvents[i].event_name,
//                 }
//                 let getEnrollCount = await enrollTbl.count({where:{id:getEvents[i].id}});
//                 value.eventCount = getEnrollCount;
//                 data.push(value);
//             }


//             return res.status(200).json(data);


//         }
//         catch(err)
//         {
//             return res.status(504).send("error in getting report")
//         }
//     }
