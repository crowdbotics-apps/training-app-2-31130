import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_475_10696}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/232a/f23f/b50f367334d90df91ae6a5f2022be64b"
          }}
          style={styles.ImageBackground_475_10697}
        />
        <View style={styles.View_475_10699}>
          <View style={styles.View_I475_10699_212_173} />
          <View style={styles.View_I475_10699_446_222}>
            <View style={styles.View_I475_10699_212_174}>
              <View style={styles.View_I475_10699_212_175} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
                }}
                style={styles.ImageBackground_I475_10699_212_176}
              />
              <View style={styles.View_I475_10699_212_177} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c8/66fe/b7093012a3f63e223aad4fbfc752b245"
              }}
              style={styles.ImageBackground_I475_10699_212_178}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I475_10699_212_182}
            />
          </View>
          <View style={styles.View_I475_10699_212_187}>
            <View style={styles.View_I475_10699_212_188}>
              <Text style={styles.Text_I475_10699_212_188}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_475_10700}>
        <View style={styles.View_I475_10700_212_229} />
        <View style={styles.View_I475_10700_212_230} />
      </View>
      <View style={styles.View_475_10701}>
        <View style={styles.View_I475_10701_212_207} />
      </View>
      <View style={styles.View_475_10702}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df1f/379e/e61134616d4e2e47baf82dffd4299ab7"
          }}
          style={styles.TouchableOpacity_I475_10702_214_67}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("475_10974"))
          }
        />
        <View style={styles.View_I475_10702_214_68}>
          <Text style={styles.Text_I475_10702_214_68}>Login</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_475_10703}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("475_10799"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23df/29f8/16d894a0770e32f64ce7129e87a2c9f7"
          }}
          style={styles.ImageBackground_I475_10703_214_67}
        />
        <View style={styles.View_I475_10703_214_68}>
          <Text style={styles.Text_I475_10703_214_68}>Create an account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_475_10704}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("475_10905"))
        }
      >
        <Text style={styles.Text_475_10704}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_475_10705}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_15333"))
        }
      >
        <View style={styles.View_I475_10705_214_124} />
        <View style={styles.View_I475_10705_214_125}>
          <Text style={styles.Text_I475_10705_214_125}>
            anne.carry@mail.com
          </Text>
        </View>
        <View style={styles.View_I475_10705_214_135}>
          <Text style={styles.Text_I475_10705_214_135}>Email</Text>
        </View>
        <View style={styles.View_I475_10705_214_171}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e8/7931/5c04865ed0375baacd72213dea1e1b91"
            }}
            style={styles.ImageBackground_I475_10705_214_171_215_1158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88f6/6c60/249baad23de3fc0b2dbbb129335ebecc"
            }}
            style={styles.ImageBackground_I475_10705_214_171_215_1162}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_475_10706}>
        <View style={styles.View_I475_10706_214_124} />
        <View style={styles.View_I475_10706_214_125}>
          <Text style={styles.Text_I475_10706_214_125}>● ● ● ● ● ●</Text>
        </View>
        <View style={styles.View_I475_10706_214_135}>
          <Text style={styles.Text_I475_10706_214_135}>Password</Text>
        </View>
        <View style={styles.View_I475_10706_214_171}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fed4/9f14/8e18a13dd9c7b68f19be744a907dce32"
            }}
            style={styles.ImageBackground_I475_10706_214_171_213_978}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd83/48a2/2a1bdd55c4d6d2aa4f11d94a6c844f97"
            }}
            style={styles.ImageBackground_I475_10706_214_171_213_982}
          />
        </View>
      </View>
      <View style={styles.View_475_10707}>
        <View style={styles.View_475_10708}>
          <Text style={styles.Text_475_10708}>Or connect with your email</Text>
        </View>
        <View style={styles.View_475_10709}>
          <View style={styles.View_475_10710} />
          <View style={styles.View_475_10711}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae25/83ec/5a0f5a3888fc2eeca9eeadc44215a684"
              }}
              style={styles.ImageBackground_I475_10711_215_1554}
            />
          </View>
        </View>
        <View style={styles.View_475_10712}>
          <View style={styles.View_475_10713} />
          <View style={styles.View_475_10714}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b8/377d/2da0861cd43c7caeb8c903cfdcaa23df"
              }}
              style={styles.ImageBackground_475_10715}
            />
          </View>
        </View>
        <View style={styles.View_475_10718}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87b8/7cb2/5bcfb46058d90333c67d47191241ac51"
            }}
            style={styles.ImageBackground_475_10719}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cf5/ea8f/90ed8305b75b0201f9391a53d7d4eaf8"
            }}
            style={styles.ImageBackground_475_10720}
          />
        </View>
      </View>
      <View style={styles.View_475_10721}>
        <View style={styles.View_475_10722}>
          <Text style={styles.Text_475_10722}>Welcome Back! </Text>
        </View>
        <View style={styles.View_475_10723}>
          <Text style={styles.Text_475_10723}>Login to continue </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_475_10696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45.21857923497268%"),
    minHeight: hp("45.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_475_10697: {
    width: wp("100%"),
    height: hp("45.21857923497268%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_475_10699: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I475_10699_212_173: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I475_10699_446_222: {
    flexGrow: 1,
    width: wp("17.776302083333334%"),
    height: hp("1.5486253415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3109375%"),
    top: hp("2.367763831967213%")
  },
  View_I475_10699_212_174: {
    width: wp("6.4875%"),
    minWidth: wp("6.4875%"),
    height: hp("1.5480917008196722%"),
    minHeight: hp("1.5480917008196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.289062500000014%"),
    top: hp("0.0005336407103828655%")
  },
  View_I475_10699_212_175: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5480917008196722%"),
    minHeight: hp("1.5480917008196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I475_10699_212_176: {
    width: wp("0.35416666666666663%"),
    minWidth: wp("0.35416666666666663%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.5010886270491803%")
  },
  View_I475_10699_212_177: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.001643613387978%"),
    minHeight: hp("1.001643613387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I475_10699_212_178: {
    width: wp("4.07265625%"),
    minWidth: wp("4.07265625%"),
    height: hp("1.497929474043716%"),
    minHeight: hp("1.497929474043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873958333333334%"),
    top: hp("0%")
  },
  ImageBackground_I475_10699_212_182: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4573727800546448%"),
    minHeight: hp("1.4573727800546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04589310109289624%")
  },
  View_I475_10699_212_187: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.7759562841530054%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I475_10699_212_188: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I475_10699_212_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_475_10700: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("91.80327868852459%"),
    minHeight: hp("91.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I475_10700_212_229: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("91.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I475_10700_212_230: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("3.00546448087432%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_475_10701: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I475_10701_212_207: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_475_10702: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("78.82513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I475_10702_214_67: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I475_10702_214_68: {
    flexGrow: 1,
    width: wp("46.37447916666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.58359375%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_I475_10702_214_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_475_10703: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I475_10703_214_67: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I475_10703_214_68: {
    flexGrow: 1,
    width: wp("46.37447916666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.58359375%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "flex-start"
  },
  Text_I475_10703_214_68: {
    color: "rgba(30, 31, 32, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_475_10704: {
    width: wp("28.000000000000004%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("90.02732240437157%"),
    justifyContent: "flex-start"
  },
  Text_475_10704: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_475_10705: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("53.14207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I475_10705_214_124: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    borderColor: "rgba(143, 146, 161, 1)",
    borderWidth: 2
  },
  View_I475_10705_214_125: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6.01092896174864%"),
    justifyContent: "flex-start"
  },
  Text_I475_10705_214_125: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I475_10705_214_135: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I475_10705_214_135: {
    color: "rgba(30, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_I475_10705_214_171: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I475_10705_214_171_215_1158: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I475_10705_214_171_215_1162: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_475_10706: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("65.98360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I475_10706_214_124: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    borderColor: "rgba(143, 146, 161, 1)",
    borderWidth: 2
  },
  View_I475_10706_214_125: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_I475_10706_214_125: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I475_10706_214_135: {
    flexGrow: 1,
    width: wp("19.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I475_10706_214_135: {
    color: "rgba(30, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_I475_10706_214_171: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%"),
    top: hp("6.147540983606561%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I475_10706_214_171_213_978: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.676699112021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3292563183060082%")
  },
  ImageBackground_I475_10706_214_171_213_982: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.676699112021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3292563183060082%")
  },
  View_475_10707: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("35.65573770491803%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_475_10708: {
    width: wp("36.62942708333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.14869791666667%"),
    top: hp("10.38251366120219%"),
    justifyContent: "flex-start"
  },
  Text_475_10708: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_475_10709: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%"),
    top: hp("0%")
  },
  View_475_10710: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(143, 146, 161, 1)",
    borderWidth: 2
  },
  View_475_10711: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000003%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I475_10711_215_1554: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("1.5646345628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  View_475_10712: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    top: hp("0%")
  },
  View_475_10713: {
    flexGrow: 1,
    width: wp("26.93333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 32, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_475_10714: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_475_10715: {
    width: wp("3.70859375%"),
    height: hp("2.3421490778688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46432291666666714%")
  },
  View_475_10718: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_475_10719: {
    flexGrow: 1,
    width: wp("27.200000000000003%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_475_10720: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%")
  },
  View_475_10721: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("24.453551912568305%")
  },
  View_475_10722: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_475_10722: {
    color: "rgba(30, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_475_10723: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601095%"),
    justifyContent: "flex-start"
  },
  Text_475_10723: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
