const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: function(){
        return this.thoughtText.length >=1 && this.thoughtText.length <= 280;
      },

    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get:function(createdAt){
        const formattedDate= new Date(createdAt).toLocaleString(); 
        return formattedDate
      }
    },
    
    reactions: [ReactionSchema],

   
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;
