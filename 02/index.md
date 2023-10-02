# 25.09.2023

## Resources

- [Fourier transform](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
- [PCWelt - DLSS explained](https://www.pcwelt.de/article/1947819/dlss-3-erklaert.html)
- [Techopedia - Discretization](https://www.techopedia.com/definition/1980/discretization)

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

Two such standards are Dolby Atmos and DTS:X
