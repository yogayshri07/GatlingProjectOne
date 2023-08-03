package com.gatling.tests

 import io.gatling.core.Predef._
 import io.gatling.http.Predef._
class FeederDemo extends Simulation {
  // protocol
  val httpProtocol = http.baseUrl("https://computer-database.gatling.io/")

  //scenario
  val feeder = csv(fileName = "data/data1.csv").circular
  val scn = scenario(scenarioName = "Feeders Demo")
    .repeat(times = 1)(feed(feeder)
      .exec { session =>
        println("Name:  " + session("Naame").as[String])
        println("Job:  " + session("Job").as[String])
        println("Page:  " + session("Page").as[String])
        session
      }

    )
    .pause(duration = 1)
    .exec(http(requestName = "Go To Home Page")
      .get("/#{page")
    )

  //setup
   setUp(scn.inject(atOnceUsers(users = 3))).protocols(httpProtocol)

}

