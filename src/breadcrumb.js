import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';

const HEIGHT = 23;
const COLOR = '#e52b50';
const TEXT_COLOR = '#fff';
const DISABLE_TEXT_COLOR = '#f4f4f4'

const Crumb = ({ isCrumbActive, index, text, firstCrumbStyle, lastCrumbStyle, crumbStyle, activeTabStyle, crumbTextStyle, activeCrumbTextStyle,
  onCrumbPress, height, triangleHeadStyle, triangleTailStyle }) => {
  return (
    <TouchableOpacity
      style={[
        styles.crumbStyle,
        crumbStyle,
        isCrumbActive ? [styles.activeCrumbStyle, activeTabStyle] : {},
        firstCrumbStyle,
        lastCrumbStyle,
        { height }]}
      onPress={() => onCrumbPress(index)}
      activeOpacity={1}
    >
      {Platform.OS === 'android' && !firstCrumbStyle ? <View style={{ width: height / 2.0, height, backgroundColor: 'transparent' }} /> : null}
      <View style={styles.crumbContainer}>
        {isCrumbActive && !firstCrumbStyle ? <View style={[styles.leftTriangleContainer, styles.triangleTail, triangleTailStyle, { left: - height / 2 }, Platform.OS === 'android' ? { top: -2 } : {}]} /> : null}
        <Text
          style={[
            styles.crumbTextStyle,
            crumbTextStyle,
            isCrumbActive ? [styles.activeCrumbTextStyle, activeCrumbTextStyle] : {}]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {text}
        </Text>
        {isCrumbActive && !lastCrumbStyle ? <View style={[styles.rightTriangleContainer, styles.triangleHead, triangleHeadStyle, { right: - height / 2 }, Platform.OS === 'android' ? { top: -2 } : {}]} /> : null}
      </View>
      {Platform.OS === 'android' && !lastCrumbStyle ? <View style={{ width: height / 2.0 , height, backgroundColor: 'white' }} /> : null}
    </TouchableOpacity>
  );
};

const handleCrumbPress = (index, flowDepth, onCrumbPress) => {
  if (flowDepth !== index) {
    onCrumbPress(index);
  }
};

const Breadcrumb = ({ flowDepth, entities, borderRadius, crumbsContainerStyle, crumbStyle, activeCrumbStyle, crumbTextStyle, activeCrumbTextStyle, onCrumbPress, isTouchable, height
}) => {
  const firstCrumbStyle = [{ borderTopLeftRadius: borderRadius - 1, borderBottomLeftRadius: borderRadius - 1 }];
  const lastCrumbStyle = [{ borderTopRightRadius: borderRadius - 1, borderBottomRightRadius: borderRadius - 1 }];
  const triangleTailStyle = height ? { borderTopWidth: height / 2.0, borderBottomWidth: height / 2.0, borderLeftWidth: height / 2.0 } : {};
  const triangleHeadStyle = height ? { borderTopWidth: height / 2.0, borderBottomWidth: height / 2.0, borderLeftWidth: height / 2.0 } : {};

  return (
    <View
      style={[styles.crumbsContainerStyle, borderRadius ? { borderRadius } : {}, crumbsContainerStyle]}
      removeClippedSubviews={false}
    >
      {
        entities.map((item, index) => {
          return (
            <Crumb
              key={index}
              index={index}
              isCrumbActive={flowDepth === index}
              text={item}
              onCrumbPress={isTouchable ? index => handleCrumbPress(index, flowDepth, onCrumbPress) : () => { }}
              firstCrumbStyle={index === 0 ? firstCrumbStyle : null}
              lastCrumbStyle={index === entities.length - 1 ? lastCrumbStyle : null}
              crumbStyle={crumbStyle}
              activeCrumbStyle={activeCrumbStyle}
              crumbTextStyle={[crumbTextStyle, index < flowDepth ? { color: TEXT_COLOR } : { color: DISABLE_TEXT_COLOR }]}
              activeCrumbTextStyle={activeCrumbTextStyle}
              height={height ? height : HEIGHT}
              triangleTailStyle={triangleTailStyle}
              triangleHeadStyle={triangleHeadStyle}
            />
          );
        })
      }
    </View>
  );
};

Breadcrumb.propTypes = {
  entities: PropTypes.array.isRequired,
  flowDepth: PropTypes.number.isRequired,
  isTouchable: PropTypes.bool.isRequired,
  onCrumbPress: PropTypes.func,
  spaceRatio: PropTypes.array,
  crumbsContainerStyle: ViewPropTypes.style,
  borderRadius: PropTypes.number,
  crumbStyle: ViewPropTypes.style,
  activeCrumbStyle: ViewPropTypes.style,
  crumbTextStyle: Text.propTypes.style,
  activeCrumbTextStyle: Text.propTypes.style,
  height: PropTypes.number
};

const styles = StyleSheet.create({
  crumbsContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    justifyContent: 'space-between'
  },
  crumbStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: HEIGHT
  },
  activeCrumbStyle: {
    backgroundColor: COLOR,
    borderColor: COLOR
  },
  crumbTextStyle: {
    color: COLOR,
    fontSize: 12
  },
  activeCrumbTextStyle: {
    color: 'white'
  },
  crumbContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  rightTriangleContainer: {
    position: 'absolute',
    right: 0,
    zIndex: 1
  },
  leftTriangleContainer: {
    position: 'absolute',
    left: 0,
    zIndex: 1
  },
  triangleHead: {
    borderTopWidth: HEIGHT / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: HEIGHT / 2.0,
    borderLeftWidth: HEIGHT / 2.0,
    borderColor: COLOR,
    borderTopColor: 'white',
    borderBottomColor: 'white',
  },
  triangleTail: {
    borderTopWidth: HEIGHT / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: HEIGHT / 2.0,
    borderLeftWidth: HEIGHT / 2.0,
    borderColor: 'white',
    borderTopColor: COLOR,
    borderBottomColor: COLOR,
  }
});

export default Breadcrumb;
