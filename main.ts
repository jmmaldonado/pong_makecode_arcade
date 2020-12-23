namespace SpriteKind {
    export const jugador1 = SpriteKind.create()
    export const jugador2 = SpriteKind.create()
    export const bola = SpriteKind.create()
}
scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000001000000000000000000010000000000000000000100000000000000000001000000000000000000010000000000000000000100000000000000000001000000000000000000010000000000`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile3], TileScale.Sixteen))
let jugador1 = sprites.create(img`
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    `, SpriteKind.jugador1)
let jugador2 = sprites.create(img`
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    f f 
    `, SpriteKind.jugador2)
let bola = sprites.create(img`
    . f f . 
    f c c f 
    f c c f 
    . f f . 
    `, SpriteKind.bola)
jugador1.x = 10
jugador2.x = 150
info.player1.setScore(0)
info.player2.setScore(0)
controller.moveSprite(jugador1, 0, 100)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        jugador2.y += -2
    }
    if (controller.B.isPressed()) {
        jugador2.y += 2
    }
})
