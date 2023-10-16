# 09.10.2023

## Coding

### Colors and their coding

#### RGB

Humans are not capable of perceiving the whole color spectrum. We have 3 cone cells for perception: R(red)G(green)B(blue). These three colors can be added to achieve different colors. This is done in the RGB color model. For Monitors, each pixel contains three subpixel(red, green and blue). Fo taking photos, the photosensor also captures three images for each color(red, green and blue).
For storing the values of each color, usually 8 bit are used. This allows for a value from 0 to 255. For red, 0 would be completely black wheres as 255 would be the maximum intensity of red. By taking up 8 bit for each color, 24 bit are used to store a color.
To create a shorter notation, the values can also be written in the hexadecimal system.
The maxium number of combinations is 256 * 256 * 256 = 16'777'216.
The rgb color system is also limited and is not suitable for every use case. E.g. very bright colors.

There are also different rgb spectrums: 

- sRGB
- Adobe RGB 1998
- ProPhoto RGB

_Notations:_

- rgb
  - E.g. rgb(255,230,23) or with an alpha value rgba(243,12,21,0.8)
- hex
  - E.g. #ff34ff


##### Silver, gold and metallic colors

Even though, there are rgb colors for silver(#C0C0C0) and gold(#ffd700), they don't look like silver or gold when displayed as a large area. Materials like silver and gold and other metallic colors require surface effects to look realistic. Normally this is done with reflections.


#### CMYK

The rgb color system is not suitable for printing as it is additive and works when the background is dark.
For printing, the surface/background is normally white and it makes sense to use a different color system to get accurate colors. The CYMK color system is subtractive.
To print with CMYK, first the cyan part of the image is printed, then the magenta, then yellow and finally the key, meaning the black part.

#### Subjective perception

The preceived color is not only dependent on the color intensity. It relates also to the surrounding colors.. Therefore a color with the same color values can appear brighter or less brighter depending on its location.

![Image showing the subjective perception of color](subjective-color.png)