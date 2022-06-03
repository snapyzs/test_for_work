const amqp = require("amqplib/callback_api");

async function sendMessage(req,res) {
  const {message} = req.body
  amqp.connect("amqp://localhost",(err,connection) => {
  if (err) {
    console.log(err);
    return res.status(500);
  }
  connection.createChannel((err1,channel)=> {
    if (err1) {
      console.log(err1);
      return res.status(500);
    }
    let queue = 'hello';
    let msg = message;
    
    channel.assertQueue(queue, {
      durable: false,
      exclusive: false,
      autoDelete: false,
      arguments: null
    })

    
    channel.sendToQueue(queue, Buffer.from(msg));
    
    setTimeout(()=>{
    channel.consume(queue,(msg)=>{
      console.log(msg.content.toString());
    },{
      noAck: true
    })
    },1000);

  })
})
  return res.status(200);
}

module.exports = sendMessage;

