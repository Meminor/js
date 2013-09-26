function appView(){
  var self = this;
  
  self.people = ko.observableArray(
  [
    {
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Abbott Howard",
        "gender": "male",
        "company": "Zillatide",
        "email": "abbotthoward@zillatide.com",
        "phone": "+1 (830) 536-3207",
        "address": "969 River Street, Lutsen, Ohio, 7111"
    },
    {
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": "Merle Garrett",
        "gender": "female",
        "company": "Sonique",
        "email": "merlegarrett@sonique.com",
        "phone": "+1 (877) 535-2307",
        "address": "951 Canal Avenue, Austinburg, Iowa, 7842"
    },
    {
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Hill Dillon",
        "gender": "male",
        "company": "Strozen",
        "email": "hilldillon@strozen.com",
        "phone": "+1 (983) 521-2796",
        "address": "969 Bokee Court, Kipp, New Mexico, 7395"
    }
 ]);
  
  self.addPerson = function() {
    self.people.push({
      name: "New at" + new Date()
    });
  };
  
  self.removePerson = function(){
      self.people.remove(this);
    };

}

ko.applyBindings(new appView());