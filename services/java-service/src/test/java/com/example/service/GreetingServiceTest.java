package com.example.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class GreetingServiceTest {
  @Test
  void greetsAName() {
    GreetingService service = new GreetingService();

    assertEquals("Hello, Ada", service.greet(" Ada "));
  }

  @Test
  void fallsBackForBlankInput() {
    GreetingService service = new GreetingService();

    assertEquals("Hello, world", service.greet("   "));
  }
}
