package com.example.service;

public final class GreetingService {
  public String greet(String name) {
    if (name == null || name.isBlank()) {
      return "Hello, world";
    }
    return "Hello, " + name.trim();
  }
}
