namespace SpriteKind {
    export const fish = SpriteKind.create()
    export const egg = SpriteKind.create()
    export const sharkfireball = SpriteKind.create()
    export const car = SpriteKind.create()
    export const snake = SpriteKind.create()
    export const dog = SpriteKind.create()
    export const sofa = SpriteKind.create()
    export const home = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sharkfireball, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    music.jumpDown.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -130
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    Current_Level += 1
    music.magicWand.play()
    Startlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dog, function (sprite, otherSprite) {
    music.powerUp.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.egg, function (sprite, otherSprite) {
    otherSprite.destroy()
    dragon = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    dragon,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    music.wawawawaa.play()
    dragon.setPosition(cat.x + 80, cat.y - 80)
    dragon.follow(cat)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.snake, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
    music.pewPew.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.playUntilDone()
    otherSprite.destroy(effects.spray, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.car, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    music.siren.play()
})
function Startlevel () {
    if (Current_Level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (Current_Level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(cat, assets.tile`myTile7`)
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(cat)
    info.setLife(9)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile5`)) {
        collect = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.fish)
        collect.startEffect(effects.fountain)
        collect.sayText("Eat me", 3000, false)
        animation.runImageAnimation(
        collect,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(collect, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile6`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.egg)
        enemy1.startEffect(effects.halo)
        enemy1.sayText("Mysterious egg:)")
        tiles.placeOnTile(enemy1, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile8`)) {
        fireball = sprites.create(img`
            ..............cfff..............
            ............ccddbf..............
            ...........cbddbff.........ccc..
            ..........fccbbcf.........cbbc..
            ...fffffffccccccff.......cdbc...
            .ffcbbbbbbbbbbbbbcfff....cdbf...
            fcbbbbbbbbbcbbbbbbcccff.cdbf....
            fbcbbbbffbbbcbcbbbcccccffdcf....
            fbb1111ffbbbcbcbbbccccccbbcf....
            .fb11111111bbcbbbccccccccbbcf...
            ..fccc33cb11bbbbcccccccfffbbf...
            ...fc131c111bbbcccccbdbc..fbbf..
            ....f33c111cbbccdddddbc....fff..
            .....ff1111fdbbccddbcc..........
            .......cccccfdbbbfcc............
            .............fffff..............
            `, SpriteKind.sharkfireball)
        tiles.placeOnTile(fireball, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
        animation.runMovementAnimation(
        fireball,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
        fireball.startEffect(effects.rings)
        fireball.sayText("poisonous water！")
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile9`)) {
        car2 = sprites.create(img`
            .........eeeeee.....
            ......eee222222ee...
            .....ee2222222222e..
            .....e94422222244be.
            .....e94422222244be.
            ..eee9944222222449be
            .e22299444222224499e
            e222299224444442299e
            e222299224444442299e
            e222299eeeeeeeeee99e
            e22229beebbbbebeeb9e
            e2eeeeebbbbbbebbbebe
            e2eeeeebbbbbbebbbebe
            ee333ee222222e222eee
            e33eeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeee
            eeeeeffffeeeeeffffee
            .eeffbbccfeeefbbbcf.
            .....cfff.....cfff..
            `, SpriteKind.car)
        tiles.placeOnTile(car2, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
        animation.runMovementAnimation(
        car2,
        animation.animationPresets(animation.easeLeft),
        2000,
        true
        )
        car2.startEffect(effects.hearts)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile10`)) {
        snake2 = sprites.create(img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `, SpriteKind.snake)
        snake2.startEffect(effects.trail)
        animation.runImageAnimation(
        snake2,
        [img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . c c c c c c c . . . 
            . . . . . c f f 6 6 f f 7 c . . 
            . . . . c 7 6 6 6 6 6 6 7 6 c . 
            . . . c 7 7 7 7 7 7 7 7 7 7 c . 
            . . . c 7 8 1 f f 1 6 7 7 7 c . 
            . . . f 6 f 1 f f 1 f 7 7 7 f . 
            . . . f 6 f 2 2 2 2 f 7 7 7 f . 
            . . c c 6 f 2 2 2 2 f 7 7 6 f . 
            . c 7 7 7 7 2 2 2 2 7 7 f c . . 
            c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
            f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
            f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 6 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . c c c c c c 6 6 6 c c . . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . . . . . . c 6 6 6 c c . . 
            . . . c c c c c c c 6 6 6 c c . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . . . . . . c 6 6 6 c c . . 
            . . . c c c c c c c 6 6 6 c c . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(snake2, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile11`)) {
        dog1 = sprites.create(img`
            bbbb........bbbb.................
            c55bb......bb55b.................
            c555bb....bb555c.................
            c5b55bccccb55b5c.................
            c5bb55bccb55bb5c.................
            c53b55555555b35c.................
            c53355555555335c.................
            c55355555555355c.................
            c55555551155555c.................
            c555ff51115ff55c........bbbbbb...
            c555ff51111ff55c.......c555555bb.
            c55551111111555c......c55555555b.
            c5551111fff1155c.....c5551115555b
            c555c11fff1155bc.....c5511111555b
            c555cc111111c5bc.....c511dd11155b
            c55555bb33cc55bcc....cbddbbd1155c
            c555555b33c55555bbccccbbdbbb1155c
            c5555555bb5555555555555555bb1555c
            c555511115555555555555555555b555c
            c555111111555555555555555555555c.
            c55511111115555555555555555555cc.
            c55111111115555555555555555555c..
            c55111111111555555555555555555c..
            cb5111111111555555555555555555c..
            .f5111111111555555555555555555c..
            .ff111111111555555555555555555c..
            ..fb11111111555555555555555555c..
            ...fb1111115555555111111555555c..
            ...fbbb11115555551111111155555c..
            ....fbbfffb5555ccccccccccb5555c..
            ....fbbf..f555c.....fbbf.c5555c..
            ....fbbf..f555c.....fbbf.cc5555c.
            ....fbbf..f55c.......fbf..cc555c.
            ....fbbf..f55c.......fbbf..cc55c.
            ....fbbf..f55c.......fbbf...c55c.
            ....fbbf..f55c......fbbbf...c55c.
            ...fbbbf..f55c......ffff....cb5c.
            ...fbbf..f555c.............c555c.
            ...ffff..f55cc.............c555c.
            .........fffc..............cccc..
            `, SpriteKind.dog)
        dog1.startEffect(effects.hearts)
        animation.runImageAnimation(
        dog1,
        [img`
            bbbb........bbbb.................
            c55bb......bb55b.................
            c555bb....bb555c.................
            c5b55bccccb55b5c.................
            c5bb55bccb55bb5c.................
            c53b55555555b35c.................
            c53355555555335c.................
            c55355555555355c.................
            c55555551155555c.................
            c555ff51115ff55c........bbbbbb...
            c555ff51111ff55c.......c555555bb.
            c55551111111555c......c55555555b.
            c5551111fff1155c.....c5551115555b
            c555c11fff1155bc.....c5511111555b
            c555cc111111c5bc.....c511dd11155b
            c55555bb33cc55bcc....cbddbbd1155c
            c555555b33c55555bbccccbbdbbb1155c
            c5555555bb5555555555555555bb1555c
            c555511115555555555555555555b555c
            c555111111555555555555555555555c.
            c55511111115555555555555555555cc.
            c55111111115555555555555555555c..
            c55111111111555555555555555555c..
            cb5111111111555555555555555555c..
            .f5111111111555555555555555555c..
            .ff111111111555555555555555555c..
            ..fb11111111555555555555555555c..
            ...fb1111115555555111111555555c..
            ...fbbb11115555551111111155555c..
            ....fbbfffb5555ccccccccccb5555c..
            ....fbbf..f555c.....fbbf.c5555c..
            ....fbbf..f555c.....fbbf.cc5555c.
            ....fbbf..f55c.......fbf..cc555c.
            ....fbbf..f55c.......fbbf..cc55c.
            ....fbbf..f55c.......fbbf...c55c.
            ....fbbf..f55c......fbbbf...c55c.
            ...fbbbf..f55c......ffff....cb5c.
            ...fbbf..f555c.............c555c.
            ...ffff..f55cc.............c555c.
            .........fffc..............cccc..
            `,img`
            bbbb........bbbb.................
            c55bb......bb55b.................
            c555bb....bb555c.................
            c5b55bccccb55b5c.................
            c5bb55bccb55bb5c.................
            c53b55555555b35c.................
            c53355555555335c.................
            c55355555555355c.................
            c55555551155555c.................
            c555ff51115ff55c........bbbbbb...
            c555ff51111ff55c.......c555555bb.
            c55551111111555c......c55555555b.
            c5551111fff1155c.....c5551115555b
            c555c11fff1155bc.....c5511111555b
            c555cc111111c5bc.....c511dd11155b
            c55555bb33cc55bcc....cbddbbd1155c
            c555555b33c55555bbccccbbdbbb1155c
            c5555555bb5555555555555555bb1555c
            c555511115555555555555555555b555c
            c555111111555555555555555555555c.
            c55511111115555555555555555555cc.
            c55111111115555555555555555555c..
            c55111111111555555555555555555c..
            cb5111111111555555555555555555c..
            .f5111111111555555555555555555c..
            .ff111111111555555555555555555c..
            ..fb11111111555555555555555555c..
            ...fb1111115555555111111555555c..
            ...fbbb11115555551111111155555c..
            ....fbbfffb5555ccccccccccb5555c..
            .ffffbbf..f555c.....fbbf.c5555c..
            ffbbbbbf..f555c.....fbbf.cc5555c.
            fbbbbbbf..f55c.......fbf..cc555c.
            fbbfffff..f55c.......fbbf..cc55c.
            ffff......f55c.......fbbf...c55c.
            ..........f55c......fbbbf...c55c.
            ..........f55c......ffff....cb5c.
            .........f555c.............c555c.
            .........f55cc.............c555c.
            .........fffc..............cccc..
            `],
        500,
        true
        )
        dog1.sayText("Welcome home:) GO touch the magic tree to get in to our home")
        tiles.placeOnTile(dog1, value7)
        tiles.setTileAt(value7, assets.tile`transparency16`)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile12`)) {
        sofa2 = sprites.create(img`
            ...cccccccccccccccccc...
            ..cd5555555555555555dc..
            .c55555555555555555555c.
            .c55333333333333333355c.
            .c53333333333333333335c.
            .c53333333333333333335c.
            c333cccccccccccccccc333c
            c55c3555555555555553c55c
            c55c5555555555555555c55c
            c55c5555555555555555c55c
            c55c5555555555555555c55c
            c35c5555555555555555c53c
            cc33333333333333333333cc
            cc33333333333333333333cc
            cccccccccccccccccccccccc
            ..cbbc............cbbc..
            `, SpriteKind.sofa)
        tiles.placeOnTile(sofa2, value8)
        tiles.setTileAt(value8, assets.tile`transparency16`)
    }
    for (let value9 of tiles.getTilesByType(assets.tile`myTile15`)) {
        sofa2 = sprites.create(img`
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......ceeeeeeeeeecf.....
            ......ceeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67eeee....
            ......ee6eeeeee6cef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
            `, SpriteKind.sofa)
        tiles.placeOnTile(sofa2, value9)
        tiles.setTileAt(value9, assets.tile`transparency16`)
    }
    for (let value10 of tiles.getTilesByType(assets.tile`myTile16`)) {
        bird = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ........ccccc...................
            ......ccbbbbbc..................
            ....ccddbbbbbbf.................
            ...cbbbddbbffbf.................
            ....ffffdbbffbff................
            .......fbbbbbbbf................
            .......fbbbbbbbff...............
            ......ffbbbbbbbbfff.............
            ......f6bbbbbb663ddcc...........
            .....cc66bbbb666dddddc..........
            .....cd36666663dddddddc.........
            .....cddd3333dbddddddbcc........
            .....cddddddddbdddddbbddc.......
            .....cddddddddbbdddbbdddbc......
            e.....cddddddddbbdbbddddbbccc...
            .e....ccddddddddbbbbcccccbbbcc.e
            7e7e...ccddddddddddddddbccffffee
            77ee7e..cccbddccbddddbbfff..77e7
            e77eee77c333bb333cbbfff..7eeeee7
            ee7eeee7c33cc33cc3fff777eee77777
            .7ee77eee777e777777eeeeeeeee777e
            ...e7e77eeeeeeee7eee77777eee77e.
            `, SpriteKind.sofa)
        bird.sayText("touch the tree to win!")
        tiles.placeOnTile(bird, value10)
        tiles.setTileAt(value10, assets.tile`transparency16`)
    }
    for (let value11 of tiles.getTilesByType(assets.tile`myTile18`)) {
        home_guide = sprites.create(img`
            ....................e2e22e2e....................
            .................222eee22e2e222.................
            ..............222e22e2e22eee22e222..............
            ...........e22e22eeee2e22e2eeee22e22e...........
            ........eeee22e22e22e2e22e2e22e22e22eeee........
            .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
            ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            .c66444444444c66e4e44e44e44ffffe66c44444444466c.
            ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
            ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
            ....644444444c66f4e44e44e44e44ee66c444444446....
            .....64eee444c66f4e44e44e44e44ee66c444eee46.....
            ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
            `, SpriteKind.home)
        tiles.placeOnTile(home_guide, value11)
        tiles.setTileAt(value11, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (cat.y < otherSprite.y) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
})
let home_guide: Sprite = null
let bird: Sprite = null
let sofa2: Sprite = null
let dog1: Sprite = null
let snake2: Sprite = null
let car2: Sprite = null
let fireball: Sprite = null
let enemy1: Sprite = null
let collect: Sprite = null
let dragon: Sprite = null
let cat: Sprite = null
let Current_Level = 0
game.showLongText("Welcome to my platform game!You will become a stray cat and looking for home on a way full of obstacles.Here are some hints for u to save ur life.Jump up and step on a duck if u see them.Don't touch the snakes,sharks,especially the waters!Good luck and have fun!:)", DialogLayout.Full)
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbccccccccccccbcccccccccccbcccccccccbccccccccccccbcccccccccccbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccbbbbbbbbbbbbbccccbbbbbbbbbbbbbccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
Current_Level = 0
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . e . . . . 
    . e e e . . . . . . . e e . . . 
    . e e e . . . . . . . e e e e . 
    . . e e f f f f f f f e e e e . 
    . . e e f e f e f e f e e e f 1 
    . . e e f e f e f e f e 1 1 1 1 
    . . e e e e e e e e e 1 1 1 3 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 . 1 1 . . 1 1 . 1 1 . . 
    . . 1 1 . 1 1 . . 1 1 . 1 1 . . 
    . . 1 1 . 1 1 . . 1 1 . 1 1 . . 
    `, SpriteKind.Player)
controller.moveSprite(cat, 100, 0)
cat.setBounceOnWall(false)
Startlevel()
game.onUpdate(function () {
    cat.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e e . . . . . . . . . . . . . . 
        e e . . . . . . . . . . . . . . 
        e e e . . . . . . . . . . . . . 
        e e e . . . . . . . . e . . . . 
        . e e e . . . . . . . e e . . . 
        . e e e . . . . . . . e e e e . 
        . . e e f f f f f f f e e e e . 
        . . e e f e f e f e f e e e f 1 
        . . e e f e f e f e f e 1 1 1 1 
        . . e e e e e e e e e 1 1 1 3 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 . 1 1 . . 1 1 . 1 1 . . 
        . . 1 1 . 1 1 . . 1 1 . 1 1 . . 
        . . 1 1 . 1 1 . . 1 1 . 1 1 . . 
        `)
    if (cat.vy < 0) {
        cat.setImage(img`
            . . . . . . . . . . . e . . . . 
            . . . . e e . . . . . e e . . . 
            . . . . e e . . . . . e e e e . 
            . . . e e e . . . . . e e e e . 
            . . . e e e . . . . f f e e f 1 
            . . . e e . . . . f e e e 1 1 1 
            . . e e e . . . f f f e 1 1 3 . 
            . . e e . . . f e e e e 1 . . . 
            . . e e . . f f f e 1 1 1 1 1 . 
            . . e e . f e e e e 1 1 1 1 1 1 
            . . e e e f f e 1 1 1 1 . 1 1 1 
            . . . e e e e e 1 1 1 . . . 1 1 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 . 1 1 . . . . . . 
            . . . . . 1 1 . 1 1 . . . . . . 
            `)
    } else if (cat.vy > 0) {
        cat.setImage(img`
            . . . e e . . . . . . . . . . . 
            . . . e e . . . . . . . . . . . 
            . . e e e . . . . . . . . . . . 
            . . e e . . . . . . . . . . . . 
            . . e e 1 . . . . . . . . . . . 
            . . e e . . . . . . . . . . . . 
            . . e f f f . . . . . . . . . . 
            . e e e f e f f . . . e . . . . 
            . 1 e f e e f e f f . e e . . . 
            . 1 1 1 e f e e f e f e e e e . 
            . 1 1 . 1 e e f e e f e e e e . 
            . 1 1 . 1 1 1 1 1 f e e e e f 1 
            . 1 1 . 1 1 . . 1 1 e e 1 1 1 1 
            . . . . 1 1 . . 1 1 1 1 1 1 3 . 
            . . . . . . . . 1 1 . 1 1 . . . 
            . . . . . . . . 1 1 . 1 1 . . . 
            `)
    } else if (cat.x % 2 == 0) {
        cat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            e e e . . . . . . . . . . . . . 
            e e e . . . . . . . . e . . . . 
            . e e e . . . . . . . e e . . . 
            . e e e . . . . . . . e e e e . 
            . . e e f f f f f f f e e e e . 
            . . e e f e f e f e f e e e f 1 
            . . e e f e f e f e f e 1 1 1 1 
            . . e e e e e e e e e 1 1 1 3 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            `)
    } else {
    	
    }
    if ((cat.isHittingTile(CollisionDirection.Left) || cat.isHittingTile(CollisionDirection.Right)) && cat.vy >= 0) {
        cat.vy = 0
        cat.ay = 0
        cat.setImage(img`
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . e e f 1 3 . . . . 
            . . . . . . . e e e 1 1 1 1 1 1 
            . . . . . . e e e e 1 1 1 1 1 1 
            . . . . . e e e e e e 1 1 . . . 
            . . . . . . . . f f f e 1 1 1 1 
            . . . . . . . . f e e e 1 1 1 1 
            . . . . . . . . f f f e 1 . . . 
            . . e e . . . . f e e e 1 . . . 
            . . e e . . . . f f f e 1 1 1 1 
            . . e e e . . . f e e e 1 1 1 1 
            . . e e e e e . f f f e 1 . . . 
            . . . e e e e e e e e e 1 1 1 1 
            . . . . . e e e e e e e 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        cat.ay = 200
    }
    if (cat.vx < 0 || cat.isHittingTile(CollisionDirection.Left)) {
        cat.image.flipX()
        cat.setImage(cat.image)
    }
})
