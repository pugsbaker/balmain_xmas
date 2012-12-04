ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'game.entities.player',
    'game.levels.level1'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
    gravity: 500,
	
	init: function() {
		// Initialize your game here; bind keys etc.
        ig.input.bind(ig.KEY.LEFT_ARROW, "left");
        ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
        ig.input.bind(ig.KEY.SPACE, "jump");
        this.loadLevel(LevelLevel1);

	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
        // screen follows the player
        var player = this.getEntitiesByType( EntityPlayer )[0];
        if( player ) {
            this.screen.x = player.pos.x - ig.system.width/2;
            this.screen.y = player.pos.y - ig.system.height/2;
        }
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		

	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 960, 640, 1 );

});