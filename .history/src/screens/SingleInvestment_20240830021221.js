const SingleInvestment = ({ route, navigation }) => {
  const navigation = useNavigation();
  const item = route?.params?.item || {}; // Safeguard for undefined params
  const [investments, setInvestments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { auth } = UseAuth();

  React.useEffect(() => {
    AdminInvestmentCall(setInvestments, new AbortController(), "get");
  }, [auth.id]);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      setInvestments([]);

      AdminInvestmentCall(setInvestments, new AbortController(), "get");
      setLoading(false);
    }, [])
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          <View>
            <View
              style={{ flexDirection: "row", marginTop: verticalScale(32) }}
            >
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.vuesaxlineararrowLeftIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowleft.png")}
                />
              </Pressable>

              <Text style={styles.investments}>Investments</Text>
            </View>
            <View
              style={{
                marginTop: verticalScale(21),
                marginBottom: verticalScale(10),
              }}
            >
              <Text style={styles.activePackage}>Active package</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.investmentImage}
              contentFit="cover"
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              {item.description || "No description available."}
            </Text>
            <View
              style={{
                marginTop: verticalScale(24),
                marginBottom: verticalScale(34),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.principal}>
                  Principal: <Text style={styles.amount}># {item.amount}</Text>
                </Text>
                <Text style={styles.profit}>
                  Profit:<Text style={styles.amount}># {item.profit}</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.roi}>
                  ROI: <Text style={styles.monthly}>{item.roi}</Text>
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:
                  <Text style={styles.location}>{item.location}</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.harvestPeriod}>
                  Harvest period:{" "}
                  <Text style={styles.duration}>{item.duration}</Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.insurance}>Insurance:</Text>

                  <View style={styles.activeWrapper}>
                    <Text style={styles.active}>
                      {item.insurance ? "Active" : "Not Active"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Pressable style={styles.investMoreWrapper}>
            <Text style={styles.investMore}>Invest more</Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};
export default SingleInvestment;
