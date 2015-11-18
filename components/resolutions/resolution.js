if (Meteor.isClient) {
	Template.resolution.helpers({
    isOwner: function() {
      return this.owner === Meteor.userId();
    }
  });

  Template.resolution.events({
    'click .toggle-checked': function() {

      Meteor.call("updateResolution", this._id, !this.checked);
      /* Insecure Way
      Resolutions.update(this._id, {$set: {checked: !this.checked}});
      */
    },

    'click .delete': function() {

      Meteor.call("deleteResolution", this._id);
      /* Insecure Way
      Resolutions.remove(this._id);
      */
    },

    'click .toggle-private': function() {
      Meteor.call("setPrivate", this._id, !this.private);
    }
  });
}