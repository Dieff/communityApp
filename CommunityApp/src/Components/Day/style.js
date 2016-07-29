var DayStyle = {

  cal_day: {
    width: 330,
    height: 300,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 3,
    borderWidth: 5,
    flexDirection: "row",
  },

  cal_day_number: {
    flex: 1,
    height: 75,
    borderWidth: 3,
    margin: -1,
    alignItems: "center",       // Horizontal
    justifyContent: "center",   // Vertical
    backgroundColor: "gray",
  },

  cal_day_number_text: {
    fontSize: 50,
    color: "black",
  },

  cal_day_ofWeek: {
    flex: 3,
    height: 40,
    backgroundColor: "gray",
    borderWidth: 3,
    margin: -1,
    alignItems: "center",
    justifyContent: "center",
  },

  cal_day_ofWeek_text: {
    fontSize: 20,
    color: "black",
  },

  cal_day_event: {
    width: 100,
    alignItems: "center",
    height: 50,
    backgroundColor: "blue",
  },

  cal_day_event_text: {
    color: "black",
    fontSize: 20,
  },

};

module.exports = DayStyle;