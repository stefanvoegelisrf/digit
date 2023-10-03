# 02.10.2023

## Resources

- [Fourier transform](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
- [PCWelt - DLSS explained](https://www.pcwelt.de/article/1947819/dlss-3-erklaert.html)
- [Techopedia - Discretization](https://www.techopedia.com/definition/1980/discretization)
- [Britannica - Euclidean geometry](https://www.britannica.com/science/Euclidean-geometry/Solid-geometry)
- [YouTube - How do non-euclidean games work?](https://www.youtube.com/watch?v=lFEIUcXCEvI&ab_channel=DigiDigger)
- [Geometry visualizations](https://twitter.com/ZenoRogue/status/1245367263936512001)

## How to make something digital? - Music example

TODO - describe the digitalization

## Discretization

Discretization describes the process to of processing signals and bringing it into some form of encoding.
In the context of digital computing, discretization takes place when continuous-time signals, such as audio or video, are reduced to discrete signals. The process of discretization is integral to analog-to-digital conversion.
E.g. a photo can be shot and to save it, it can be encoded as a jpeg. Through this process, there is always some information lost. This is due to the fact that we need to define a resolution that the image has e.g. 1920x1080. This will result in 2073600 pixels. So we can only store that amount of pixels and when zooming into the image, the individual pixels will become visible.
For an encoding, there is always some kind of spectrum defined.
In the context of photography, print and film, the color spectrum is very important.

### How is the 3D sound decomposed in the new 3D formats?

For most usages, sound is used in stereo format. That will result in 2 channels with different sound. For stereo, there is the possibility to mimic 3D sound but this will then be baked into the audio file.
For 3D, we should use more than 2 channels. Resp. we should use channels for each sound. The sounds would then be placed in a threedimensional space using coordinates. Sound is not perceived the same in each direction, so we could also provide information on sound direction.
The amount of channels/sounds could theoretically be endless, but it makes more sense to limit it, as an infinite amount of channels could be too much for a system to handle.
To play the 3D sound, the playback device must know the amount of speakers available and their location in the room where they are placed. The playback device must then also calculate what sound to play at what level on which speaker.

Two such standards are Dolby Atmos and DTS:X.

### Excercises

#### 1a

Q: Name a computer game that does not model the world according to Euclidean geometry.

A: Euclidean geometry applies to a flat world. But when we use 3D geometry, his axioms are no longer true in every case. [Hyperbolica](https://store.steampowered.com/app/1256230/Hyperbolica/) could be an example


##### What is Euclidean geometry?

Euclidean Geometry is considered the study of plane and solid shapes based on different axioms and theorems. The word Geometry comes from the Greek words "geo", meaning the "earth", and "metrein", meaning "to measure". Euclid's Geometry was introduced by the Greek mathematician Euclid, where Euclid defined a basic set of rules and theorems for a proper study of geometry which were manifested in a book called "Elements".

###### Euclid's axioms

1. Given two points, there is a straight line that joins them.
2. A straight line segment can be prolonged indefinitely.
3. A circle can be constructed when a point for its centre and a distance for its radius are given.
4. All right angles are equal.
5. If a straight line falling on two straight lines makes the interior angles on the same side less than two right angles, the two straight lines, if produced indefinitely, will meet on that side on which the angles are less than the two right angles.



#### 1b

Q: Name a computer game that is not based on linear time.

A: [Viewfinder](https://store.steampowered.com/app/1382070/Viewfinder/) could be an example as it allows rewinding time.

#### 1c

Human senses and their modalities

- _Seeing_ is the visual perception with _eyes_.
- _Hearing_ is the auditive perception with _ears_.
- _Smelling_ is the olfactory perception with the _nose_.
- _Tasting_ is the gustatory perception with the _tongue_.
- _Touching_ is the tactile perception with _skin(touch)_
- _Feeling temperature_ is the temperature perception with _skin(thermo)_
- _Feeling pain_ is the pain perception with _skin(Nociception)_
- _Body feeling_ is the body perception(or depth sensitivity) with the _body(Proprioception)_
- _Orientation_ in space is balance perception with the _inner ear_

#### 1d, 1e, 1f

- _Optics_ is the study of *light*
  - Submodalities: Color, brightness, contrast, shape, motion, etc.
  - Input devices: Cameras, photodetectors, light sensors, etc.
  - Output devices: Displays (LED, LCD, OLED, etc.), projectors, lasers, lighting systems, etc.
- _Acoustics_ is the study of *sound*
  - Submodalities: Pitch, volume, timbre, rhythm, melody, direction, distance, etc.
  - Input devices: Microphones, sound sensors, acoustic arrays, etc.
  - Output devices: Speakers, headphones, hearing aids, soundbars, etc.
- _Gustoric_ is the science of *taste*
  - Submodalities: Sweet, sour, salty, bitter, umami, spicy, etc.
  - Input devices: Taste sensors (electronic tongues), biochemical sensors, etc.
  - Output devices: Flavor dispensers, edible substances with controlled flavor profiles (though technologically generating taste is quite complex and not fully realized).
- _Olfaction_ is the science of *smell*
  - Submodalities: Fragrant, pungent, putrid, burnt, minty, sweet, etc.
  - Input devices: Olfactory sensors, gas chromatographs, electronic noses, etc.
  - Output devices: Scent diffusers, olfactometers, aroma generators (these are quite limited and a fully-realized technology to digitally recreate scents is not yet available).
- _Haptics_ is the science of *touch*
  - Submodalities: Pressure, temperature, texture, vibration, pain, etc.
  - Input devices: Pressure sensors, capacitive touch screens, thermocouples, etc.
  - Output devices: Haptic feedback devices (like in VR controllers or smartphones), tactile actuators, vibrotactile systems, exoskeletons, etc.
- _Kinesthetics_ is the study of the *sensation of movement*
  - Submodalities: Direction, speed, acceleration, rhythm, force, etc.
  - Input devices: Accelerometers, gyroscopes, motion capture systems, etc.
  - Output devices: Servomotors, piezoelectric actuators, robotic limbs, etc.