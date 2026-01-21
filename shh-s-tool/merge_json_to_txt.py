import os

def merge_json_to_txt(input_dir: str):
    output_txt = os.path.join(input_dir, "json.txt")

    with open(output_txt, "w", encoding="utf-8") as out:
        for filename in sorted(os.listdir(input_dir)):
            if filename.lower().endswith(".json"):
                file_path = os.path.join(input_dir, filename)

                with open(file_path, "r", encoding="utf-8-sig") as f:
                    content = f.read().strip()

                out.write("event.custom(\n")
                out.write(content)
                out.write("\n)\n")

    print(f"\n Completed: \n{output_txt}")

def main():
    input_dir = input("Input the dir:").strip('"')

    if not os.path.isdir(input_dir):
        print("ERROR")
        return

    merge_json_to_txt(input_dir)

if __name__ == "__main__":
    main()
