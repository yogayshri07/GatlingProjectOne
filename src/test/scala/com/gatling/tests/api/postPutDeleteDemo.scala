package com.gatling.tests.api

 import io.gatling.core.Predef._
 import io.gatling.http.Predef._

class postPutDeleteDemo extends Simulation{
  //protocol
  val httpProtocol = http.baseUrl(url = "https://reqres.in/api")
  //scenario
  val scn = scenario(scenarioName = "Create User")
    .exec(
      http(requestName = "Create User")
        .post("/users")
        .check(
          status.is(expected = 200),
          jsonPath(path = "$.data.first_name").is(expected = "Janet")
        ))
    .pause(duration = 1)
  //setup
  setUp(
    scn.inject(rampUsers(10).during(5))
      .protocols(httpProtocol)
  )

}
