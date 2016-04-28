# fontello-update bug demonstration

There are two files:

- fontello-original.zip
- fontello-repacked.zip

The first is the original untouched file that was downloaded from the [fontello's website](http://fontello.com/).

The other one was created by unzipping the first file and re-zipping with a native OSX compression app (no changes to contents of the folder were done).

You can see the output on the screenshot below:

![Screenshot](/screenshot.png?raw=true "Screenshot")

If you want to see for yourself, just run these commands:

```shell
git clone https://github.com/mareksuscak/adm-zip-test.git
cd adm-zip-test
npm install
```