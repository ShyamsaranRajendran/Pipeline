from python_utility.core import normalize_name


def test_normalize_name_returns_trimmed_value():
    assert normalize_name(" Maya ") == "Maya"


def test_normalize_name_falls_back_for_blank_input():
    assert normalize_name("   ") == "world"
