def normalize_name(name: str) -> str:
    cleaned = name.strip()
    return cleaned if cleaned else "world"
