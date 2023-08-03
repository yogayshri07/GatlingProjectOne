package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PostPutDeleteApiDemo extends Simulation {


  //protocol
  val httpProtocol = http
    .baseUrl(url = "https://reqres.in/api")

  //scenario
  val scn = scenario(scenarioName = "Create User")
    .exec(
      http(requestName = "Create User Req")
        .post("/users")
        .header(name = "content type", value = "application/json")
        .asJson
        .body(StringBody(
          """{
            |    "name": "morpheus",
            |    "job": "leader"
            |}
            |
            |""".stripMargin))
        .body(RawFileBody(filePath = "data/user.json")).asJson
        .check(
          status.is(expected = 201),
          jsonPath(path = "$.name").is(expected = "morpheus")
        ))
    .pause(duration = 1)
  val scn2 = scenario(scenarioName = "Update User")
    .exec(
      http(requestName = " Update User")
        .put(url = "/users/2")
        .body(RawFileBody(filePath = "data/user.json")).asJson
        .check(
          status is 200,
          jsonPath(path = "$.name") is "Rahgav"
        )
    )
    .pause(duration = 5)
  val scn3 = scenario(scenarioName = "Delete User")
    .exec(
      http(requestName = " Delete User")
        .delete(url = "/users/2")
        .check(
          status is 204
        )
    )
  //setup
  setUp(
    scn.inject(rampUsers(10).during(5)),
      scn2.inject(rampUsers(8).during(6)),
        scn3.inject(rampUsers(5).during(3))
    .protocols(httpProtocol)
  )
}
