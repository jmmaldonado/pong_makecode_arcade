namespace SpriteKind {
    export const jugador1 = SpriteKind.create()
    export const jugador2 = SpriteKind.create()
    export const bola = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.bola, SpriteKind.jugador2, function (sprite, otherSprite) {
    velocidad_X = -0.5
})
sprites.onOverlap(SpriteKind.bola, SpriteKind.jugador1, function (sprite, otherSprite) {
    velocidad_X = 0.5
})
function sacar_bola (sentido: number) {
    bola.setPosition(80, 60)
    velocidad_X = 0.5 * sentido
    velocidad_Y = 0.3
    music.baDing.play()
}
let velocidad_Y = 0
let velocidad_X = 0
let bola: Sprite = null
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
bola = sprites.create(img`
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
velocidad_X = 0.5
velocidad_Y = 0.3
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        jugador2.y += -2
    }
    if (controller.B.isPressed()) {
        jugador2.y += 2
    }
})
// Movimiento de la bola
game.onUpdate(function () {
    bola.x += velocidad_X
    bola.y += velocidad_Y
    if (bola.y >= scene.screenHeight()) {
        velocidad_Y = -0.3
    }
    if (bola.y <= 2) {
        velocidad_Y = 0.3
    }
    if (bola.x >= scene.screenWidth() - 2) {
        info.player1.changeScoreBy(1)
        sacar_bola(-1)
    }
    if (bola.x <= 2) {
        info.player2.changeScoreBy(1)
        sacar_bola(1)
    }
})
