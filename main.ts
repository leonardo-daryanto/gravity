//% weight=100 icon=ABC color=#000000
namespace text {
    /**
     *  textsring. e.g.: text: Battle it now!
     */
    //% block
    export function text (text: string): void {
        let textSprite = textsprite.create(text)
    }
}
