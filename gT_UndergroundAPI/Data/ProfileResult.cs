using gT_UndergroundAPI.Data.Models;

namespace gT_UndergroundAPI.Data
{
    public class ProfileResult
    {
        public bool Success { get; set; }

        public string Message { get; set; } = null!;

        public UserProfile? Profile { get; set; } = null!;
    }
}
