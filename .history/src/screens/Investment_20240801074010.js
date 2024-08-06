const Investment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={[styles.investment, styles.investmentBg]}>
          <StatusBar style={styles.upBars1} />
          <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
            <Image
              // top arrow
              style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft.png")}
            />
          </Pressable>

          {/* Centering investments text and image */}
          <View style={styles.centeredView}>
            <Text style={styles.investments}>Investments</Text>
            <Image
              // maize picture
              style={[styles.maizeLayout, styles.centeredImage]}
              contentFit="cover"
              source={require("../assets/frame-47.png")}
            />
          </View>

          <Text style={[styles.activePackage, styles.activeTypo]}>
            Active package
          </Text>

          <Text style={[styles.maizeOffersA, styles.maizeTypo]}>
            Maize offers a stable and potentially lucrative opportunity for both
            seasoned and novice investors. As a staple crop with diverse
            applications, maize serves as a resilient investment choice amidst
            market fluctuations
          </Text>

          <View
            style={
              {
                // Keep the position as is for the principal text section
              }
            }
          >
            <Text style={[styles.principal1, styles.textPosition]}>
              Principal:
            </Text>
            <Text style={[styles.geoLocation1, styles.roi1Position]}>
              Geo-location:
            </Text>
            <Text style={[styles.harvestPeriod1, styles.months1Position]}>
              Harvest period:
            </Text>
            <Text style={[styles.insurance1, styles.months1Position]}>
              Insurance:
            </Text>
            <Text style={[styles.roi1, styles.roi1Position]}>ROI:</Text>
            <Text style={[styles.profit1, styles.textPosition]}>Profit:</Text>
            <Text style={[styles.text2, styles.textPosition]}>#40,000</Text>
            <Text style={[styles.monthly1, styles.roi1Position]}>
              4% Monthly
            </Text>
            <Text style={[styles.text3, styles.textPosition]}>#140,000</Text>
            <Text style={[styles.southWest1, styles.monthsTypo]}>
              South-west
            </Text>
            <Text style={[styles.months1, styles.months1Position]}>
              4-Months
            </Text>
            {/* <View style={[styles.activeContainer, styles.months1Position]}>
              <Text style={[styles.active, styles.activePosition]}>Active</Text>
            </View> */}
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              // ginger
              style={[styles.investmentItem, styles.investmentLayout]}
              contentFit="cover"
              source={require("../assets/frame-49.png")}
            />
            <Text style={[styles.maizeOffersA1, styles.maizeTypo]}>
              Maize offers a stable and potentially lucrative opportunity for
              both seasoned and novice investors. As a staple crop with diverse
              applications, maize serves as a resilient investment choice amidst
              market fluctuations
            </Text>
            <Text style={[styles.principal, styles.principalTypo]}>
              Principal:
            </Text>
            <Text style={[styles.geoLocation, styles.geoTypo]}>
              Geo-location:
            </Text>
            <Text style={[styles.harvestPeriod, styles.monthsPosition]}>
              Harvest period:
            </Text>
            <Text style={[styles.insurance, styles.monthsPosition]}>
              Insurance:
            </Text>
            <Text style={[styles.roi, styles.roiTypo]}>ROI:</Text>
            <Text style={[styles.profit, styles.profitTypo]}>Profit:</Text>
            <Text style={[styles.text, styles.textTypo1]}>#40,000</Text>
            <Text style={[styles.monthly, styles.monthlyTypo]}>4% Monthly</Text>
            <Text style={[styles.text1, styles.textTypo]}>#140,000</Text>
            <Text style={[styles.southWest, styles.monthsTypo]}>
              South-west
            </Text>
            <Text style={[styles.months, styles.monthsTypo]}>12-Months</Text>
            <View style={[styles.activeWrapper, styles.activeLayout]}>
              <Text style={[styles.active, styles.activePosition]}>Active</Text>
            </View>
          </View>

          <Pressable
            style={styles.investMoreWrapper}
            onPress={() => navigation.navigate("NewInvestment")}
          >
            <Text style={[styles.investMore, styles.activePosition]}>
              Invest more
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  investmentBg: {
    backgroundColor: Color.colorWhite,
  },
  // Other styles...
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 69,
  },
  centeredImage: {
    width: "90%",
    height: 148,
  },
  // Retaining other styles...
});
