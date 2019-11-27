# CPE 1040 - Intro to Computer Engineering #
## Assignment - Final Project ##
## Part 2 (Week 13, Assignment 8) ##
### Week 13 - Oscilloscopes and Serial Protocols ###
## Oscilloscopes ##
## Part 1: Visualize simple signals ##
This shows the set up and the reading of the oscilloscope.

[Video](https://imgur.com/a/iKxMMyE)
## Part 2: OUT signal ##
This video shows the oscilloscope set up to the workstation that emits pulse. We are able to manipulate the reading using the workstation

[Video](https://imgur.com/a/hSLcBpD)
## Part 3: PWM pulses ## 
This program displays the microbit emitting a pulse and the oscilloscope reading said pulse.

JS file: [emit-pwm-pulse.js](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-therunawayfiveguy/blob/master/emit-owm-pulse.js)

[Video](https://imgur.com/a/gSlabuU)
## Part 4: Changing PWM pulse ##
This program shows the PWM pulse changing from the micro:bit using the oscilloscope to read the signal. The reading increments and decremenets by 5%. 

JS file: [changing-pwm-pulse.js](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-therunawayfiveguy/blob/master/changing-pwm-pulse.js)

[Video](https://imgur.com/a/26anvjA)
## Part 5: Other Servo Function ##
This program features a code that uses other servo functions on micro:bit to change the pulse on the oscilloscope reading.

JS file: [other-servo-function.js](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-therunawayfiveguy/blob/master/other-servo-function.js)

[Video](https://imgur.com/a/JNYvjWn)
## I2C ##
## Questions ## 
### What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them? ###
The disadvantages of UART is that it requires two devices that have the same clock rate. The disadvantages of SPI are the number of pins requiered due to the amount of devices needed. I2C improves them by allowing more than one master and being able to connect to 1008 slave devices.
### I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL? ###
SDA is the data signal from the slave device and SCL is the clock signal from the master device.
### What distinguishes the master and the slaves? ###
The master can write and read data to the slave, however, the slaves cannot do the same to the master. Slaves cannot initiate transfer and they have to obey when called opon by the master.
### How are the two types of protocol frames different? ###
The two types if protocol frames are different because the frame must be generated and lets the slave know where the information needs to be sent. The data frame first is sent to the SDA which is chosen by the master or slave depending on either a read or write calling.
### What is the most appropriate trigger for capturing an I2C frame on the oscilloscope? ###
SDA becasue of the it's falling edge.
## First steps with I2C ##
### What frame did you capture? ###
The frame my group captured was an address frame

[Setup](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-therunawayfiveguy/blob/master/setup.jpg)

[Reading](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-therunawayfiveguy/blob/master/reading.jpg)
### What does the I2C write function do when there is nothing connected? ###
It will try to run the complete the function but because nothing is connected (an address is not found), nothing happens
### Is there a difference in what you capture if you write a number to one of the internal device addresses? ###
Yes. When using a random numerical address the reading on the oscilloscope doesn't show a spike in the yellow reading. However, when using a specified address such as the accelometer on the micro:bit, the reading for yellow spikes up to show the address has received the data.
## Short I2C program ##
JS file: [i2c-address.js](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-therunawayfiveguy/blob/master/i2c-addresses.js)
### Can you get different values by moving the micro:bit around? ###
Yes. When my group shook the micro:bit the value displayed on the matrix changed.

[Video](https://imgur.com/a/lyiB484)
