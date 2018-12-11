# ChemDraw Web Source Add-in Examples

Welcome to the ChemDraw web source add-in examples! This directory contains examples that can be used for learning ChemDraw add-in API and testing ChemDraw add-ins that are loaded from web sources.

## How to Use?

Launch ChemDraw Office, and go to **Add-ins > Add-in Manager... > Add > Add from URL...**, and enter a URL that directs to an add-in manifest listed in [manifest examples](https://github.com/zhanglin-wu/ChemDraw-WebSourceAddins/tree/master/Manifests).

## [Manifest Examples](https://github.com/zhanglin-wu/ChemDraw-WebSourceAddins/tree/master/Manifests)

### Valid Add-ins
- Manifest 1. A manifest containing all valid add-ins
  - `https://raw.githubusercontent.com/zhanglin-wu/ChemDraw-WebSourceAddins/master/Manifests/all-valid-addins-manifest.json`
- Manifest 2. xxxx

### Error Cases

- Manifest 3. A manifest that is an empty string
  - `https://raw.githubusercontent.com/zhanglin-wu/ChemDraw-WebSourceAddins/master/Manifests/empty-string-manifest.json`
- Manifest 4. A manifest that contains an empty list of add-ins
  - `https://raw.githubusercontent.com/zhanglin-wu/ChemDraw-WebSourceAddins/master/Manifests/empty-addin-list-manifest.json`


## [Add-in Examples](https://github.com/zhanglin-wu/ChemDraw-WebSourceAddins/tree/master/Add-ins)

### [Hello World](https://zhanglin-wu.github.io/ChemDraw-WebSourceAddins/Add-ins/Hello%20World/main.html)

A simple ChemDraw add-in that shows the version of the ChemDraw add-in API.

![Hello World](./README-Images/hello-world.png)

### [Document Data Importer and Exporter](https://zhanglin-wu.github.io/ChemDraw-WebSourceAddins/Add-ins/Document%20Data%20Importer%20and%20Exporter/main.html)

A ChemDraw add-in that uses ChemDraw add-in API to add and get data in the active document. The supported data formats are CDXML, CDX encoded as [Base64](https://en.wikipedia.org/wiki/Base64), [SMILES](http://www.daylight.com/dayhtml/doc/theory/theory.smiles.html), [InChI](https://iupac.org/who-we-are/divisions/division-details/inchi/), [InChIKey](https://iupac.org/who-we-are/divisions/division-details/inchi/), [MolV2000](http://accelrys.com/products/collaborative-science/biovia-draw/ctfile-no-fee.html), [MolV3000](http://accelrys.com/products/collaborative-science/biovia-draw/ctfile-no-fee.html), [RXNV2000](http://accelrys.com/products/collaborative-science/biovia-draw/ctfile-no-fee.html), [RXNV3000](http://accelrys.com/products/collaborative-science/biovia-draw/ctfile-no-fee.html), and PNG encoded as [Base64](https://en.wikipedia.org/wiki/Base64).

![Document Data Importer and Exporter](./README-Images/document-data-importer-and-exporter.png)

### [Selection Monitor](https://zhanglin-wu.github.io/ChemDraw-WebSourceAddins/Add-ins/Selection%20Monitor/main.html)

A ChemDraw add-in that uses the selection API to get the preview image of the selected structures in the active document.

![Selection Monitor](./README-Images/selection-monitor.png)