const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    console.log(`Published Channel: ${channel}, payload: ${payload}`);
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    document.addEventListener(channel, callback);
    console.log('Subbed to Channel: ',channel)
  }
}

module.exports = PubSub;
