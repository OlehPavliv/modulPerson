
(function(){
    var people ={
        people:['Oleh','Kolya','Vasya','Petro'],
        init:function(){
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom:function(){
            this.$mainBlock = $('.main');
            this.$btn = this.$mainBlock.find('.addBtn');
            this.$input = this.$mainBlock.find('.nPerson');
            this.$ul = this.$mainBlock.find('.listName')
        },
        bindEvents:function(){
            this.$btn.on('click',this.addName.bind(this));
            this.$ul.delegate('span.delName','click',this.deleteName.bind(this));
        },
        render:function(){
            this.$ul.html('');
            var  inf ={
                people:this.people
            };
            for(var i = 0;i<inf.people.length;i++){
                this.$ul.append('<li>'+inf.people[i]+'<span class="delName">X</span></li>');
            };
           
        },
        addName: function(){
            this.people.push(this.$input.val());
            this.render();
            this.$input.val('');
        },
        deleteName:function(e){
            var $remove = $(e.target).closest('li');
            var span = this.$ul.find('li').index($remove);
            this.people.splice(span,1);
            this.render();
        }
        
    };
    people.init();
})();