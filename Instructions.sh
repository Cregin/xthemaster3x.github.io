cd /home/wilson/Desktop/repo
dpkg-scanpackages -m . /dev/null > Packages
rm Packages.gz
gzip Packages
