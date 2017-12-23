var mainState = {
     

     preload: function() {
        game.load.image('background', 'background.png');
		game.load.image('answer', 'answer.JPG');
        game.load.image('next', 'next.JPG');
    
    },
    
    buildSum: function() {
        this.questions = [{ques:"Who invented the telephone?", ans:"Bell"},{ques:"Which nail grows fastest?", ans:"middle"},{ques:"What temperature does water boil at?", ans:"100C"},{ques:"Who discovered penicillin?", ans:"Fleming"},{ques:"Who wrote Julius Caesar, Macbeth and Hamlet?", ans:"Shakespeare"},{ques:"What did the crocodile swallow in Peter Pan?", ans:"An alarm clock"},{ques:"Who did Lady Diana Spencer marry?", ans:"Prince Charles"},{ques:"Which river passes through Madrid?", ans:"Manzanares"},{ques:"What did Joseph Priesley discover in 1774?", ans:"Oxygen"},{ques:"Which is the only mammal that can’t jump?", ans:"elephant"},{ques:"What does the roman numeral C represent?", ans:"100"},{ques:"What nationality was Chopin?", ans:"Polish"},{ques:"Who lived at 221B, Baker Street, London?", ans:"Sherlock Holmes"},{ques:"How many dots are there on two dice?", ans:"42"},{ques:"Where was Christopher Columbus born?", ans:"Genoa"},{ques:"Who painted the Sistine Chapel?", ans:"Michelangelo"},{ques:"What language has the most words?", ans:"English"},{ques:"What money do they use in Japan?", ans:"yen"},{ques:"Who wrote the Ugly Duckling?", ans:"Hans Christian Andersen"},{ques:"Who gave his name to the month of July? ", ans:"Julius Caesar"},{ques:"Who invented the electric light bulb?", ans:"Thomas Edison"},{ques:"What’s the smallest type of tree in the world?", ans:"Bonsai"},{ques:"How much does a litre of water weigh?", ans:"1kg"},{ques:"What is the first letter on a typewriter?", ans:"Q"},{ques:"What nationality was Marco Polo?", ans:"Italian"}];
        this.a= Math.floor(Math.random() * this.questions.length);
        this.b= this.questions[this.a].ques;
        this.string = this.b;
        this.answer = this.questions[this.a].ans;
        return this.string;
    },

    
    
    create: function() {

        background = game.add.image(0, 0, 'background');
        
        


        var nameLabel = game.add.text(game.width/2, 20,
            'Quick Quiz', { font: '35px Arial', fill: '#ffffff' });
        nameLabel.anchor.setTo(0.5, 0.5);
        
        var question = this.buildSum();
                
        var questionLabel = game.add.text(game.width/2, 80,
            question, { font: '20px Arial', fill: '#ffffff' });
        questionLabel.anchor.setTo(0.5, 0.5);
        
            
        
        
        
        this.button = game.add.button(game.world.centerX, game.world.centerY-15, 'next', this.actionOnClick, this);
        this.button.anchor.setTo(0.5, 0.5);
        
            
        this.button2 = game.add.button(game.world.centerX, game.world.centerY+60, 'answer', this.actionOnClick2, this);
        this.button2.anchor.setTo(0.5, 0.5);
        
        
     
        
    },
    
    actionOnClick: function(){
        location.reload();
    },
    
    actionOnClick2: function(){
        var answerLabel = game.add.text(game.width/2, game.world.centerY+105,
        this.answer, { font: '35px Arial', fill: '#ffffff' });
        answerLabel.anchor.setTo(0.5, 0.5);
    
    },
    
    
};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);  
game.state.start('main');