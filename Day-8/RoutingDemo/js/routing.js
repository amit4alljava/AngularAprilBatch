var MobileView =  Backbone.View.extend({
    render:function(){
        this.$el.html("Mobile View...."+this.model.get("id")+" "+this.model.get("name")+
        this.model.get("desc")+"<img width='100' height='100' src='"+this.model.get("image")+"'>"
        );
        return this;
    }
});

var MobileModel = Backbone.Model.extend({urlRoot:"js/mobile.json"});
var applePhone = new MobileModel();
applePhone.fetch({success:function(data){

    alert(data);
},error:function(err){
    console.log("Error in Data Fetch ",err);
}});
var TabletView =  Backbone.View.extend({
    render:function(){
        this.$el.html("Tablet View....");
        return this;
    }
});

var LedView =  Backbone.View.extend({
    render:function(){
        this.$el.html("Led View....");
        return this;
    }
});

// Routing
var AppRouter = Backbone.Router.extend({
    routes:{
        "mobiles":"mobileview",
        "tablets":"tabletview",
        "leds":"ledview"

    },
    mobileview:function(){
        var view = new MobileView({el:"#container",model:applePhone});
        view.render();
    },
    tabletview:function(){
        var view = new TabletView({el:"#container"});
        view.render();
    },
    ledview:function(){
        var view = new LedView({el:"#container"});
        view.render();
    }

});
var router = new AppRouter();
Backbone.history.start();

var NavBarView= Backbone.View.extend({
    events:{
        "click":"OnClick"
    },
    OnClick:function(e){
        var $li = $(e.target);
        router.navigate($li.attr("data-url"),{trigger:true});
    }

});
var navBarView = new NavBarView({el:"#navbar"});



