// Tilføj din kode her
namespace Planet {
    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% help=bluetooth/uart-write-line weight=79
    //% block="Send %data til jorden" blockGap=8
    //% parts="bluetooth" advanced=true
    export function uartWriteLine(data: string): void {
        bluetooth.uartWriteString(data);
    }
}