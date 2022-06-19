namespace Pai9.Models
{
    public class Song
    {
        public int Id { get; set; }

        // [Required(ErrorMessage = "Title is required!")]
        // [StringLength(100, ErrorMessage = "Maximal length of the title of a song is 100 characters!")]
        public string Title { get; set; }
        public string Artist { get; set; }
        public int GenreId { get; set; }

    }
}