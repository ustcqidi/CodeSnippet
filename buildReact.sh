#!/bin/sh
XBUILD="/Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild"
PROJECT_ROOT=$(dirname $(pwd -P $0)/${0#\.\/})
PROJECT="$PROJECT_ROOT/Example/Pods/Pods.xcodeproj"
TARGET="React"
KEEP_INCLUDE_DIR=""
ARCH="Release"


#check input parameters
if [ $# -gt 0 ]; then
	if [ "$1" = "Debug" ]; then
		ARCH="$1"
	elif [ "$1" = "Release" ]; then
		ARCH="$1"
	else
		ARCH="Release"
	fi

	if [ "$1" = "KeepDir" ]; then
		KEEP_INCLUDE_DIR=$1
	fi
	if [ "$2" = "KeepDir" ]; then
		KEEP_INCLUDE_DIR=$2
	fi
fi
PRODUCT="$PWD/Product/$ARCH"
mkdir -p "$PRODUCT"

#all: libReact.a
#libi386.a:
if [ "$1" = "Debug" ]; then
 $XBUILD -project $PROJECT -target $TARGET -sdk iphonesimulator -configuration $ARCH clean build
 cp $PROJECT_ROOT/Example/build/$ARCH-iphonesimulator/React/lib$TARGET.a "./lib_i386.a"
fi

#libArmv7.a:
$XBUILD -project $PROJECT -target $TARGET -sdk iphoneos -arch armv7 -configuration $ARCH clean build
cp $PROJECT_ROOT/Example/build/$ARCH-iphoneos/React/lib$TARGET.a "./lib_armv7.a"

#libArm64.a:
$XBUILD -project $PROJECT -target $TARGET -sdk iphoneos -arch arm64 -configuration $ARCH clean build
cp $PROJECT_ROOT/Example/build/$ARCH-iphoneos/React/lib$TARGET.a "./lib_arm64.a"

#libUniversal.a: libi386.a libArmv7.a libArm64.a
if [ "$1" = "Debug" ]; then
	lipo -create "./lib_i386.a"  "./lib_armv7.a"  "./lib_arm64.a" -output "${PRODUCT}/lib${TARGET}.a"
else
	lipo -create "./lib_armv7.a"  "./lib_arm64.a" -output "${PRODUCT}/lib${TARGET}.a"
fi

#cp headers
rm -rf "$PROJECT_ROOT/Example/build"
rm *.a
#if [ "$KEEP_INCLUDE_DIR" = "KeepDir" ]; then
#	#保持目录结构
#	cp -af ./QYReaderLib/* "$PRODUCT/include"
#	find "$PRODUCT/include" -iname "*.bundle" -exec rm -Rf {} \;
#	find "$PRODUCT/include" -iname "*.m" -exec rm {}  \;
#	find "$PRODUCT/include" -iname "*.mm" -exec rm {} \;
#	find "$PRODUCT/include" -iname "*.png" -exec rm {} \;
#	find "$PRODUCT/include" -iname "*.jpg" -exec rm {} \;
#	find "$PRODUCT/include" -iname "*.lproj" -exec rm {} \;
#	find "$PRODUCT/include" -iname "*.pch" -exec rm {} \;
#else
#mkdir "$PRODUCT/include"
#	 find ./QYReaderLib -iname "QRRootViewController.h" -exec cp {} "$PRODUCT/include" \;
#	 find ./QYReaderLib -iname "QRNavigationController.h" -exec cp {} "$PRODUCT/include" \;
#	 find ./QYReaderLib -iname "QRBookModel.h" -exec cp {} "$PRODUCT/include" \;

#fi

# find ./lib/QYUIKitFoundation -iname "*.h" -exec cp {} "$PRODUCT/include" \;
# cp -af ./QiXiu/searchInputView.bundle "$PRODUCT/"
# cp -af ./QiXiu/loadingView.bundle "$PRODUCT/"

#clean:
# rm -f "./lib_i386.a"  "./lib_armv7.a" "./lib_armv7s.a"  "./lib_arm64.a"
#rm -rf build

#svn add un-versioned header files & commit
#cd product/include
#svn status |grep '\?' |awk '{print $2}'| xargs svn add
#cd -
#echo "svn commit:"
#svn ci product/ -m "build at:`date +%c`"

#CP
#uikit_path="$trunk_path/lib/QYUIKit"
#echo "拷贝到:$uikit_path"
#cp -R product/include "$uikit_path"
#cp product/libiQiYiUIKit.a "$uikit_path"
#echo "拷贝完成"
